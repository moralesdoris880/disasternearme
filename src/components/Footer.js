import React from "react";
import { Switch, Route, NavLink} from "react-router-dom";
import About from "./About";
import Resources from "./Resources";

function Footer(){
    return (
        <div>
            <hr />
            <p>@2022 Doris Morales. All Rights Reserved</p>
            <div>
                <NavLink
                    to="/"
                    exact
                >
                    Home
                </NavLink>
                <NavLink
                    to="/About"
                    exact
                >
                    About
                </NavLink>
                <NavLink
                    to="/Resources"
                    exact
                >
                    Resources
                </NavLink>
            </div>
            <Switch>
                <Route exact path ="/About">
                    <About />
                </Route>
                <Route exact path="/Resources">
                    <Resources />
                </Route>
            </Switch>
        </div>
    )
}

export default Footer;

