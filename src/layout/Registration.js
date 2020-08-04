import React from "react";
import {BrowserRouter as Redirect, Link} from "react-router-dom";

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
        }

        console.log(registerData);

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': '2020'
            },
            body: JSON.stringify(registerData),
        };

        console.log(requestOptions);

        fetch('http://103.16.73.242:5000/api/registration', requestOptions)
            .then(response => {
                if (response.status === 200) {
                    console.log("Response: ", response);
                    this.setState({isRegister: true});
                    return response;

                } else {
                    console.log("Something Wrong");
                }
            })
            .then(data => {
                this.setState({printMessage: data})
                console.log(data)
            });
    }

    render() {
        const {printMessage, isRegister} = this.state;

        if (isRegister) {
            console.log("Redirect Call")
            return <Redirect to='/verify'/>
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
                                    </div>

                                    <div className="card-body">
                                        {printMessage && true ? printMessage.response ? printMessage.response.status : 'Success' : 'no data'}
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