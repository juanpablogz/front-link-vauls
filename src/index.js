import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import axios from 'axios';

axios.defaults.baseURL =  process.env.NODE_ENV !== 'production' ? 'http://127.0.0.1:3000/api/v1/' : 'http://link-vauls-api.herokuapp.com/api/v1/'
ReactDOM.render(
    <App />,
  document.getElementById("root")
);
