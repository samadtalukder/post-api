import React, { Component, createRef } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./layout/Home";
import Login from "./layout/Login";
import Registration from "./layout/Registration";
import VerifyEmail from "./layout/VerifyEmail";
import ForgotPassword from "./layout/ForgotPassword";
import Login2 from "./layout/Login2";
import FormTest from "./layout/FormTest";
import FormTest2 from "./layout/FormTest2";
import JoiForm from './layout/joiForm';
import { ToastContainer } from 'react-toastify';

class App extends Component {


    render() {

        return (
            <Router>

                <div>
                    <ToastContainer />

                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/login' component={JoiForm} />
                        <Route path='/registration' component={Registration} />
                        <Route path='/verify' component={VerifyEmail} />
                        <Route path='/forgot_password' component={ForgotPassword} />

                    </Switch>
                </div>
            </Router>
        );
    }


}

export default App;
