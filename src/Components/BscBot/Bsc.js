import './Bsc.css';

import { Component } from 'react';

class Bsc extends Component {
    state = {};

    render() {
        return (
            <div>
                <div className="">
                    <div className="">
                        <div className="">
                            <div className="">
                                <p className="">Add new wallets</p>
                                <button id="addWallets">WALLETS</button>
                                <p className="">Check latest block</p>
                                <button id="balanceOfShitcoin">Check</button>
                                <p className="">
                                    Trading stopped version:{' '}
                                    <input
                                        id="tradingStoppedVersion"
                                        type="checkbox"
                                        className=""
                                    />
                                </p>
                                <input
                                    id="toggleBuysMethodId"
                                    placeholder="MethodID for enabling trading"
                                    className=""
                                />
                                <p className="">
                                    Antibot version:{' '}
                                    <input
                                        id="antibotVersion"
                                        type="checkbox"
                                        className=""
                                    />
                                </p>
                                <p className="">
                                    Spambot version:{' '}
                                    <input
                                        id="spambotVersion"
                                        type="checkbox"
                                        className=""
                                    />
                                </p>
                                <input
                                    id="timeBetweenBuys"
                                    placeholder="Time between buys in ms"
                                    type="number"
                                    className=""
                                />
                                <p className="">
                                    Max buy version:{' '}
                                    <input
                                        id="MaxBuyVersion"
                                        type="checkbox"
                                        className=""
                                    />
                                </p>
                                <input
                                    id="maxBuyValue"
                                    placeholder="Max amount in BNB (not wbnb)"
                                    className=""
                                />
                                <p className="">
                                    Batch wrap:{' '}
                                    <input
                                        id="batchWrapVersion"
                                        type="checkbox"
                                        className=""
                                    />
                                </p>
                                <input
                                    id="batchWrap"
                                    placeholder="Batch wrap bnb"
                                    className=""
                                />
                                <p>Clear the console</p>
                                <svg
                                    id="clearConsole"
                                    className=""
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M12.319,5.792L8.836,2.328C8.589,2.08,8.269,2.295,8.269,2.573v1.534C8.115,4.091,7.937,4.084,7.783,4.084c-2.592,0-4.7,2.097-4.7,4.676c0,1.749,0.968,3.337,2.528,4.146c0.352,0.194,0.651-0.257,0.424-0.529c-0.415-0.492-0.643-1.118-0.643-1.762c0-1.514,1.261-2.747,2.787-2.747c0.029,0,0.06,0,0.09,0.002v1.632c0,0.335,0.378,0.435,0.568,0.245l3.483-3.464C12.455,6.147,12.455,5.928,12.319,5.792 M8.938,8.67V7.554c0-0.411-0.528-0.377-0.781-0.377c-1.906,0-3.457,1.542-3.457,3.438c0,0.271,0.033,0.542,0.097,0.805C4.149,10.7,3.775,9.762,3.775,8.76c0-2.197,1.798-3.985,4.008-3.985c0.251,0,0.501,0.023,0.744,0.069c0.212,0.039,0.412-0.124,0.412-0.34v-1.1l2.646,2.633L8.938,8.67z M14.389,7.107c-0.34-0.18-0.662,0.244-0.424,0.529c0.416,0.493,0.644,1.118,0.644,1.762c0,1.515-1.272,2.747-2.798,2.747c-0.029,0-0.061,0-0.089-0.002v-1.631c0-0.354-0.382-0.419-0.558-0.246l-3.482,3.465c-0.136,0.136-0.136,0.355,0,0.49l3.482,3.465c0.189,0.186,0.568,0.096,0.568-0.245v-1.533c0.153,0.016,0.331,0.022,0.484,0.022c2.592,0,4.7-2.098,4.7-4.677C16.917,9.506,15.948,7.917,14.389,7.107 M12.217,15.238c-0.251,0-0.501-0.022-0.743-0.069c-0.212-0.039-0.411,0.125-0.411,0.341v1.101l-2.646-2.634l2.646-2.633v1.116c0,0.174,0.126,0.318,0.295,0.343c0.158,0.024,0.318,0.034,0.486,0.034c1.905,0,3.456-1.542,3.456-3.438c0-0.271-0.032-0.541-0.097-0.804c0.648,0.719,1.022,1.659,1.022,2.66C16.226,13.451,14.428,15.238,12.217,15.238"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="">
                            <div className="">
                                <span className="">
                                    <button id="buyShitcoinsBtn" className="">
                                        BUY SHITCOINS
                                    </button>
                                    <button id="sellShitcoinsBtn" className="">
                                        SELL SHITCOINS
                                    </button>
                                    <button id="snipePresaleBtn" className="">
                                        SNIPE PRESALE
                                    </button>
                                </span>

                                <div id="buyShitcoins">
                                    <div className="">
                                        <input
                                            id="shitcoinAddr"
                                            placeholder="Shitcoin Address"
                                            type="text"
                                        />
                                        <input
                                            id="busdSnipe"
                                            className=""
                                            type="checkbox"
                                        />
                                        <span className="">BUSD</span>
                                    </div>
                                    <div className="">
                                        <input
                                            id="inputAmount"
                                            placeholder="Input amount in BNB"
                                            type="text"
                                        />
                                        <input
                                            id="inputAmountDefault"
                                            className=""
                                            type="checkbox"
                                        />
                                    </div>
                                    <div className="">
                                        <input
                                            id="gas"
                                            placeholder="Gas in gwei"
                                            type="text"
                                        />
                                        <input
                                            id="gasDefault"
                                            className=""
                                            type="checkbox"
                                        />
                                    </div>
                                    <div className="">
                                        <input
                                            id="noOfTxs"
                                            placeholder="Number of transactions"
                                            type="text"
                                        />
                                        <input
                                            id="noOfTxsDefault"
                                            className=""
                                            type="checkbox"
                                        />
                                    </div>

                                    <span className="">
                                        <button
                                            id="sendTransaction"
                                            className=""
                                        >
                                            SEND TRANSACTION
                                        </button>
                                    </span>
                                </div>
                            </div>
                            <div className="">
                                <span className="">
                                    <h2 className="">CONSOLE</h2>
                                </span>
                                <div className=""></div>
                            </div>
                        </div>
                        <div className="">
                            <div className="">
                                <span className="">
                                    <h2>BUY/SELL</h2>{' '}
                                </span>
                                <p className="">Approve your shitcoin</p>
                                <button id="approveBtn">APPROVE</button>
                                <p className="">Scan</p>
                                <div className="">
                                    <button className="">Scan for..</button>
                                    <div id="scanForDiv" className="">
                                        <button disabled id="scanForRug">
                                            Scan for incoming rug
                                        </button>
                                        <button id="scanForPossibilityOfSell">
                                            Scan for possibility of sell
                                        </button>
                                    </div>
                                </div>
                                <p className="">Wallets to buy with</p>
                                <div className="">
                                    <button className="">Choose</button>
                                    <div id="walletsDiv" className=""></div>
                                </div>
                                <p className="">Your BNB balance</p>
                                <p id="bnbAmount" className=""></p>
                                <p id="wbnbAmount" className=""></p>
                                <p className="">
                                    How much are your tokens worth
                                </p>
                                <p id="howWorthPara" className=""></p>
                                <p className="">
                                    Scan:
                                    <input
                                        id="worthnessOfTokens"
                                        type="checkbox"
                                        className=""
                                    />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Bsc;
