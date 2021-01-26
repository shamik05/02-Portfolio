import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";

const App = () => (
  <>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  </>
);

export default App;
