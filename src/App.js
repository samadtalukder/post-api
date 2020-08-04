import React, {Component, createRef} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./layout/Home";
import Login from "./layout/Login";
import Registration from "./layout/Registration";
import VerifyEmail from "./layout/VerifyEmail";
import ForgotPassword from "./layout/ForgotPassword";

class App extends Component {


    render() {

        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/login' component={Login}/>
                        <Route path='/registration' component={Registration}/>
                        <Route path='/verify' component={VerifyEmail}/>
                        <Route path='/forgot_password' component={ForgotPassword}/>

                    </Switch>
                </div>
            </Router>
        );
    }


}

export default App;
