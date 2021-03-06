# Getting started with Scour

After `git clone` to start development:

### `Recommended Node.js version: 16.13`

```
npm install eslint prettier -g
npm install
git checkout -b "branch_name"
npm start
```

## Less integration

Project is integrated with less compiler. When styling a component u should always use BEM notation, save files as `_camelCase.less` and import it in `index.less`. Changes that happens in underscored files won't refresh the project, to refresh it, save `index.less` (it will recompile all of the imports). The output will be one minified css file. This ensures that all of the styles will be always imported.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
