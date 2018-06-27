# Cornucopia

### A platform for running historical simulations on cryptocurrency trading strategies build with React and Redux.

Feature to configure your own cryptocurrency tradingbot coming soon.

# Built with

Cornucopia is built with React 16.3.2 https://github.com/facebook/react/releases and Redux 5.0.7.

It uses e.g. react-bootstrap and react-stockcharts.

Uses Jest and Enzyme for testing.

# Tests

`npm test` to run all tests.

# Demo

NOTICE: BACKEND AND FRONTEND MIGHT TAKE A WHILE TO FIRE UP IF NOT VISITED IN WHILE, SINCE THEY ARE DEPLOYED FOR FREE AT HEROKU.

Demo app https://cornucopia-frontend.herokuapp.com

The simulation form https://cornucopia-frontend.herokuapp.com/simulate

# Production Backend

Cornucopia has a backend build with Node.js and Express.js located at https://cornucopia-backend.herokuapp.com/ which is hosted as a private repo.

API endpoint for candlesticks https://cornucopia-backend.herokuapp.com/api/v1/candlesticks

# Deployment instructions for Heroku

Use deployment create-react-app-buildpack deployment on Heroku. https://github.com/mars/create-react-app-buildpack

`heroku create cornucopia-frontend --buildpack https://github.com/mars/create-react-app-buildpack.git`

`cornucopia-frontend` is replacable by any name you choose to call your app.

`npm run build`

`git add .`

`git commit -m 'React build for Heroku deployment.'`

`git push heroku master`

`heroku open`

# Resouces

- Good explanation of redux actions and reducers.
- https://gist.github.com/kof/9ead8b0899e2e1306311

# Troubleshooting for testing

If you get `Error: Error watching file for changes: EMFILE`.

If you're using MAC OS make sure watchman is installed by running `brew install watchman`.
Installing jest-cli can solve the issue, but create following error `TypeError: environment.teardown is not a function?`.

In the event you get `TypeError: environment.teardown is not a function?` see this useful Stackoverflow link.

https://stackoverflow.com/questions/50696201/how-to-solve-typeerror-environment-teardown-is-not-a-function
