import React from "react";
import Home from "./Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
