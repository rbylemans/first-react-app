import React from 'react';
import ReactDOM from 'react-dom';
import 'jquery/dist/jquery.min.js'
import 'popper.js/dist/umd/popper'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './index.css';
import App from "./App";

var element = <button className="btn btn-danger">Hello world!</button>;
    ReactDOM.render(<App />, document.getElementById("root"));

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


