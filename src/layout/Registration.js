import React from "react";
import {BrowserRouter as Redirect, Link} from "react-router-dom";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import axios from 'axios';

class Registration extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            printMessage: {},
            isRegister: false,
        };
    }

    submitData(event) {
        event.preventDefault();

        let registerData = {
            Email: this.refs.Email.value,
            Password: this.refs.Password.value,
        };

        localStorage.setItem('email', this.refs.Email.value);

        console.log(registerData);

        /*const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': '2020'
            },
            body: JSON.stringify(registerData),
        };*/


        const header = {
            'Content-Type': 'application/json',
            'x-api-key': '2020'

        };

        let data = JSON.stringify({
                Email: this.refs.Email.value,
                Password: this.refs.Password.value,
            }
        )

        axios.post('http://103.16.73.242:5000/api/registration', data, {
            headers: header
        }).then(res => {
            console.log(res)
            console.log(res.data)


        }).catch(error => {
            console.log(error)
        })

        /*fetch('http://103.16.73.242:5000/api/registration', requestOptions)
            .then(response => {
                if (response.status === 200) {
                    console.log("Response: ", response);
                    toast.success("Registration Success");
                    this.setState({isRegister: true});
                    return response;

                } else {
                    toast.error("Registration Failed");
                    console.log("Registration Failed");
                }
            })
            .then(data => {
                this.setState({printMessage: data})
                console.log(data)
            });*/
    }

    render() {
        const {isRegister, printMessage} = this.state;

        if (isRegister) {
            this.props.history.push("/verify");
            //window.location.href = '/verify'
        }

        return (
            <div className="container">

                <div className="row justify-content-center">

                    <div className="col-md-6">

                        <div className="card">

                            <header className="card-header">

                                <h4 className="card-title mt-2">Sign up</h4>

                            </header>

                            <article className="card-body">

                                <form onSubmit={this.submitData.bind(this)}>

                                    <div className="form-group">

                                        <label htmlFor="Email">Email address</label>

                                        <input ref="Email" type="email" className="form-control" placeholder=""/>

                                    </div>

                                    <div className="form-group">

                                        <label htmlFor="Password">Password</label>

                                        <input ref="Password" className="form-control" type="password"/>

                                    </div>

                                    <div className="form-group">
                                        <button type="submit" name="action"
                                                className="btn btn-primary btn-block"> Register
                                        </button>
                                        <ToastContainer/>
                                    </div>

                                    <div className="card-body">
                                        Response
                                        Message: {printMessage && true ? printMessage.response ? printMessage.response.message : 'Success' : 'no data'}
                                    </div>

                                </form>

                            </article>

                        </div>

                    </div>

                </div>

            </div>

        )
    }
}

export default Registration;
