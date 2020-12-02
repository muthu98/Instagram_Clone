import React from "react";
import Header from "./Component/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/notify">notify</Route>
        <Route path="/explore">explore</Route>
        <Route path="/direct">direct</Route>
        <Route path="/profile">profile</Route>
        <Route exact path="/">
          Home
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
