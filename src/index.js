import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { MyClosetKeeper } from "./components/MyClosetKeeper"
import "./index.css"


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <MyClosetKeeper />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);