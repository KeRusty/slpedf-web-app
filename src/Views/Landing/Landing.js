import React, { Component } from "react";
import logo from '../../Assests/img/logo.svg';
import { Link } from "react-router-dom";
import './Landing.css'

import Login from "../../Components/Login/Login";

import Button from '@material-ui/core/Button';

class Landing extends Component {

    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {

        return (
            <div className="App">
                <header className="App-header">

                    <img src={logo} className="App-logo" alt="logo" />

                    <div>
                        <Button variant="outlined" color="primary" href="/login">Sign In</Button>
                        &nbsp;
                        <Button variant="outlined" color="secondary" href="/register">Sign Up</Button>
                    </div>



                    <div>

                    </div>

                </header>
            </div>
        );

    }
}

export default Landing;
