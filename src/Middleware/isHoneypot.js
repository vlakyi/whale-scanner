// import web3 from 'web3';
const Web3 = require('web3');

let tokenName = '';
let tokenSymbol = '';
let tokenDecimals = 0;
let maxSell = 0;
let maxTXAmount = 0;
let bnbIN = 1000000000000000000;
let maxTxBNB = null;
tokenInfo = {};

web3 = new Web3('https://bsc-dataseed.binance.org/');

// prettier-ignore
async function honeypotIs(address) {
    return new Promise(async (resolve, reject) => {
        await getMaxes(address);
        await getBNBIn(address)
        let encodedAddress = web3.eth.abi.encodeParameter('address', address);
        let contractFuncData = '0xd66383cb';
        let callData = contractFuncData+encodedAddress.substring(2);

        let blacklisted = {
            '0xa914f69aef900beb60ae57679c5d4bc316a2536a': 'SPAMMING SCAM',
            '0x105e62565a31c269439b29371df4588bf169cef5': 'SCAM',
            '0xbbd1d56b4ccab9302aecc3d9b18c0c1799fe7525': 'Error: TRANSACTION_FROM_FAILED'
        };
        let unableToCheck = {
            '0x54810d2e8d3a551c8a87390c4c18bb739c5b2063': 'Coin does not utilise PancakeSwap'
        };

        if(blacklisted[address.toLowerCase()] !== undefined) {
            let reason = blacklisted[address.toLowerCase()];
            return reason;
        }
        if(unableToCheck[address.toLowerCase()] !== undefined) {
            let reason = unableToCheck[address.toLowerCase()];
            return reason;
        }

        let val = 100000000000000000;
        if(bnbIN < val) {
            val = bnbIN - 1000;
        }
        web3.eth.call({
            to: '0x2bf75fd2fab5fc635a4c6073864c708dfc8396fc',
            from: '0x8894e0a0c962cb723c1976a4421c95949be2d4e3',
            value: val,
            gas: 45000000,
            data: callData,
        })
        .then((val) => {
            let warnings = [];
            let decoded = web3.eth.abi.decodeParameters(['uint256', 'uint256', 'uint256', 'uint256', 'uint256', 'uint256'], val);
            let buyExpectedOut = web3.utils.toBN(decoded[0]);
            let buyActualOut = web3.utils.toBN(decoded[1]);
            let sellExpectedOut = web3.utils.toBN(decoded[2]);
            let sellActualOut = web3.utils.toBN(decoded[3]);
            let buyGasUsed = web3.utils.toBN(decoded[4]);
            let sellGasUsed = web3.utils.toBN(decoded[5]);
            buy_tax = Math.round((buyExpectedOut - buyActualOut) / buyExpectedOut * 100 * 10) / 10;
            sell_tax = Math.round((sellExpectedOut - sellActualOut) / sellExpectedOut * 100 * 10) / 10;
            if(buy_tax + sell_tax > 80) {
                warnings.push("Extremely high tax. Effectively a honeypot.")
            }else if(buy_tax + sell_tax > 40) {
                warnings.push("Really high tax.");
            }
            if(sellGasUsed > 1500000) {
                warnings.push("Selling costs a lot of gas.");
            }
            // console.log(buy_tax, sell_tax);
            tokenInfo.buyTax = buy_tax;
            tokenInfo.sellTax = sell_tax;
            tokenInfo.buyGas = numberWithCommas(buyGasUsed);
            tokenInfo.sellGas = numberWithCommas(sellGasUsed);

            let maxdiv = '';
            if(maxTXAmount != 0 || maxSell != 0) {
                let n = 'Max TX';
                let x = maxTXAmount;
                if(maxSell != 0) {
                    n = 'Max Sell';
                    x = maxSell;
                }
                let bnbWorth = '?'
                if(maxTxBNB != null) {
                    bnbWorth = Math.round(maxTxBNB / 10**15) / 10**3;
                }
                let tokens = Math.round(x / 10**tokenDecimals);
                maxdiv = '<p>'+n+': ' + tokens + ' ' + tokenSymbol + ' (~'+bnbWorth+' BNB)</p>';
                tokenInfo.maxTxInTokens = tokens;
                tokenInfo.maxTxInBNB = bnbWorth;
            }

            if(warnings.length > 0) {
                warningsEncountered = true;
                uiType = 'warning';
                warningmsg = '<p><ul>WARNINGS';
                for(let i = 0; i < warnings.length; i++) {
                    warningmsg += '<li>'+warnings[i]+'</li>';
                }
                warningmsg += '</ul></p>';
            }

            return resolve({
                honeypot: false,
                tokenInfo
            })
        })
        .catch(err => {
            // console.log(err)
            
            return reject({
                honeypot: true,
                tokenInfo
            })
        });
    })
}

// prettier-ignore
async function getMaxes(address) {
    let sig = web3.eth.abi.encodeFunctionSignature({name: '_maxTxAmount', type: 'function', inputs: []});
    d = {
        to: address,
        from: '0x8894e0a0c962cb723c1976a4421c95949be2d4e3',
        value: 0,
        gas: 15000000,
        data: sig,
    };
    try {
        let val = await web3.eth.call(d);
        maxTXAmount = web3.utils.toBN(val);
    } catch (e) {
        // I will nest as much as I want. screw javascript.
        sig = web3.eth.abi.encodeFunctionSignature({name: 'maxSellTransactionAmount', type: 'function', inputs: []});
        d = {
            to: address,
            from: '0x8894e0a0c962cb723c1976a4421c95949be2d4e3',
            value: 0,
            gas: 15000000,
            data: sig,
        };
        try {
            let val2 = await web3.eth.call(d);
            maxSell = web3.utils.toBN(val2);
            console.log(val2, maxSell);
        } catch (e) {
            // console.log(e)
        }
    }
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

async function getBNBIn(address) {
    let amountIn = maxTXAmount;
    if (maxSell != 0) {
        amountIn = maxSell;
    }
    let WETH = '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c';
    let path = [address, WETH];
    let sig = web3.eth.abi.encodeFunctionCall(
        {
            name: 'getAmountsOut',
            type: 'function',
            inputs: [
                { type: 'uint256', name: 'amountIn' },
                { type: 'address[]', name: 'path' },
            ],
            outputs: [{ type: 'uint256[]', name: 'amounts' }],
        },
        [amountIn, path]
    );

    d = {
        to: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
        from: '0x8894e0a0c962cb723c1976a4421c95949be2d4e3',
        value: 0,
        gas: 15000000,
        data: sig,
    };
    try {
        let val = await web3.eth.call(d);
        let decoded = web3.eth.abi.decodeParameter('uint256[]', val);
        bnbIN = web3.utils.toBN(decoded[1]);
        maxTxBNB = bnbIN;
    } catch (e) {
        // console.log(e);
    }
}

// honeypotIs('0xcEFB115fB3Fe96bED23368609489d339339C70A4')
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// export default honeypotIs;
module.exports = honeypotIs;
