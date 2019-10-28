## Demo

The demo is available here:
https://weather-app-bk.herokuapp.com/

## Features

* Loading 5 days forecast for cities
* Showing the average temperature
* Showing the predicted conditions
* Finding nearest city based on geo location
* Fully responsive

## How to setup?

## Global requirements

To run this application you need to have newset `yarn` installed. You can download it from here: https://yarnpkg.com/en/docs/install

It's a package manager like `npm`, but created by `facebook`.
**If you have no other choice, you can use regular `npm` instead of `yarn`, but you must be aware that dependencies are not locked for it. Then instead of using `yarn start` you need to go with `npm run start`. The same situation is for every other command.**

### Setting up project for the first time

To properly run project you need to create `.env` in the root directory. 

1. Set the variable `REACT_APP_WEATHER_API_KEY` to the valid API key for http://openweathermap.org API.
2. Set the variable `REACT_APP_OPEN_CAGE_API_KEY` to the valid API key for https://opencagedata.com/ API.

For example, the `.env` file would look like that:
```
REACT_APP_WEATHER_API_KEY=420de34685a167618ef1c487988cf9ce
```

Then use command `yarn` to install dependencies.

**Be aware** that `yarn` will show you missing peer dependencies. It's okey, those dependencies are for some Bootstrap 4 components which are not used.

### Developing project with `yarn start`

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

## Thought process

I didn't think and design much upfront. I decided to deliver one small feature at one commit and then move forward constantly. This process should be visible when you look at git history.

I also wrote unit tests for parts that seemed crucial for me. I prefer not to sacrifice quality in the tight time constrains, rather find the tools that will fasten my development process.

To fasten development, I decided to go with Bootstrap 4, it gives me RWD behaviours almost out of the box and the styling is pretty nice for a starter.

Whole application is written with use of functional components and hooks. It's the most up to date aproach.

## Trade offs I made

I decided to show only average of the daily temperature. At the beginning I wanted to implement daily temperature indicator and nightly temperature indicator, but because I had to use 3 hour based API I didn't know how to calculate those values. It depends on the sunset and sunrise and those information aren't exposed.

Also picking the icon and description is simplified. Probably it needs improvement, because the application simply takes first result for the day.

## What I might implement with more times

### Features
* Proper daily temperature and nightly temperature
* Showing air pressure
* Improving calculation of the weather's description
* Showing possibility of rain
* Showing information about wind
* Maybe some charts would look nice?

### Bugs
* Should work on "jumping" when user hits search. When app is loading the button should still in the same place. Just the UX thing.

### Technicalities
* Writing some e2e tests with Cypress and Cucumber to test high level features and to generate living documentation
* Creating StoryBook for keeping designers and programmers on the same side
* Creating proper CI/CD
* Optimization
