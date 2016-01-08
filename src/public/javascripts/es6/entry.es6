import React from "react";
import ReactDOM from "react-dom";
// import {EventEmitter} from "events";

// import {App} from "./components/app.js";

const App = React.createClass({
  render: function(){
    return ( <h2>React, Babel & Webpack setup correctly!</h2> )
  }
})

ReactDOM.render(
  <App/>,
  document.getElementById('app')
)
