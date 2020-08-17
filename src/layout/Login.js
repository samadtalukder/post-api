import React, {Component} from 'react';
import axios from "axios";
import {toast} from "react-toastify";


const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({formErrors, ...rest}) => {
    let valid = true;

    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });

    // validate the form was filled out
    Object.values(rest).forEach(val => {
        val === null && (valid = false);
    });

    return valid;
};

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

            email: null,
            password: null,

            formErrors: {
                email: "",
                password: ""
            }
        };
    }


    handleSubmit = e => {
        e.preventDefault();

        if (formValid(this.state)) {

            const header = {
                'Content-Type': 'application/json',
                'x-api-key': '2020'

            };

            let data = JSON.stringify({
                Email: this.state.email,
                Password: this.state.password,
            });

            console.log(data)

            axios.post('http://103.16.73.242:5000/api/registration', data, {headers: header})
                .then(res => {
                    console.log(res)
                    if (res.status === 200) {
                        console.log(res)
                        toast.success("Registration Success");
                        this.setState({isRegister: true});
                        return res;
                    }
                }).catch(error => {
                if (error.response && error.response.status >= 400 && error.response.status < 500) {
                    console.log(error.response);
                    console.log(error.response.data.response.message);
                    toast.error(error.response.data.response.message);
                } else {

                    toast.error('Something went wrong. please try again later!');
                }
            });

            console.log(`
            Email: ${this.state.email} 
            Password: ${this.state.password}
      `);

        } else {
            toast.error("Please Enter Valid Email and Password")
            console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        }
    };

    handleChange = e => {
        e.preventDefault();

        const {name, value} = e.target;

        let formErrors = {...this.state.formErrors};

        switch (name) {

            case "email":
                formErrors.email = emailRegex.test(value)
                    ? ""
                    : "invalid email address";
                break;

            case "password":
                formErrors.password =
                    value.length < 6 ? "minimum 6 characters required" : "";
                break;

            default:
                break;
        }

        this.setState({formErrors, [name]: value});
    };


    render() {
        const {formErrors} = this.state;

        return (
            <div className="wrapper">
                <div className="form-wrapper">
                    <h1>Create Account</h1>
                    <form onSubmit={this.handleSubmit} noValidate>

                        <div className="email">
                            <label htmlFor="email">Email</label>
                            <input
                                className={formErrors.email.length > 0 ? "error" : null}
                                placeholder="Email"
                                type="email"
                                name="email"
                                noValidate
                                onChange={this.handleChange}
                            />
                            {formErrors.email.length > 0 && (
                                <span className="errorMessage">{formErrors.email}</span>
                            )}
                        </div>
                        <div className="password">
                            <label htmlFor="password">Password</label>
                            <input
                                className={formErrors.password.length > 0 ? "error" : null}
                                placeholder="Password"
                                type="password"
                                name="password"
                                noValidate
                                onChange={this.handleChange}
                            />
                            {formErrors.password.length > 0 && (
                                <span className="errorMessage">{formErrors.password}</span>
                            )}
                        </div>
                        <div className="createAccount">
                            <button type="submit">Create Account</button>
                            <small>Already Have an Account?</small>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;