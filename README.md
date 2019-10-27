This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setting up project for the first time

To properly run project you need to create `.env` in the root directory. 

1. Set the variable `REACT_APP_WEATHER_API_KEY` to the valid API key for http://openweathermap.org API.
2. Set the variable `REACT_APP_OPEN_CAGE_API_KEY` to the valid API key for https://opencagedata.com/ API.

For example, the `.env` file would look like that:
```
REACT_APP_WEATHER_API_KEY=420de34685a167618ef1c487988cf9ce
```

### Starting project with `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### Testing project with `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Building project with `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
