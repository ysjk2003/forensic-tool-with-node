import React from "react"
import { Switch, Route } from "react-router-dom"

import MainPage from "../page/MainPage"
import "./App.css"

function App() {
  return (
    <Switch>
      <Route exact={true} path={"/"} component={MainPage} />
    </Switch>
  )
}

export default App
