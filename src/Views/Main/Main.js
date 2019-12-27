import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

// Routes
import Landing from '../Landing/Landing';
import Login from '../Login/Login';
import Register from "../Register/Register"

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() { }

    render() {
        return (
            <main>
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                </Switch>
            </main>
        );
    }
}

export default Main;