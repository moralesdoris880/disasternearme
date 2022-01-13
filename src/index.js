import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route} from "react-router-dom";
import Home from "./components/Home";
import "./index.css";

ReactDOM.render(
    <BrowserRouter>
        <Route path="/">
            <Home />
        </Route>
    </BrowserRouter>, document.getElementById("root")
);