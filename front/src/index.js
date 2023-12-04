import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Homepage from "./components/Homepage/Homepage";
import Search from "./components/Search/Search";
import Navbar from "./components/Navbar/Navbar";
import Result from "./components/Result/Result";
import "./styles/global.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useRouteError,
} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />

    <Homepage />
    <Search />
    <Result />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
