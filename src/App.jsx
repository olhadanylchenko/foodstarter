import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Albums from "./Albums";
import Photos from "./Photos";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/user/:id" component={Albums} exact />
        <Route path="/user/:userId/album/:id" component={Photos} exact />
      </Switch>
    </BrowserRouter>
  );
}
