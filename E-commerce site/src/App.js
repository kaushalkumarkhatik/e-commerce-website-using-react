import React from 'react';
import Home from "./Home.js"
import { Switch, Route } from "react-router-dom"

const App = () => {

  return (
    <>
    <Switch>
    <Route exact path="/">
       <Home />
    </Route>
    </Switch>
  
    < />
  )

}



export default App;