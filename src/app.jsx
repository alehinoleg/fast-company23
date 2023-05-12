import React from "react";
import { Route, Switch, Redirect } from "react-router-dom/cjs/react-router-dom";

import Users from "./layouts/users";
import Login from "./layouts/login";
import Main from "./layouts/main";
import NavBar from "./components/navBar";

const App = () => {
    return (
        <>
            <NavBar/>
            <Switch>
                <Route path="/users/:userId?" component={Users}/>
                <Route path="/login" component={Login}/>
                <Route path="/" component={Main} />
                <Redirect to="/"/>
            </Switch>
        </>
    );
};

export default App;
