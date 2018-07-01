import React, { Component } from "react";
import "./app.css";

import Layout from "./layout";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/routes/home";
import StrategyForm from "./redux/containers/strategy-form";
import RobotConfiguration from "./components/routes/robot-configuration";
// https://daveceddia.com/create-react-app-express-backend/

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/simulate" exact component={StrategyForm} />
              <Route path="/robotconfig" exact component={RobotConfiguration} />
            </Switch>
          </BrowserRouter>
        </Layout>
      </div>
    );
  }
}

export default App;
