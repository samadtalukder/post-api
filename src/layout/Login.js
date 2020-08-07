import React from "react";
import Joi from "joi-browser";


class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: {
                value: '',
                error: true
            },
            password: {
                value: '',
                error: null
            },
            errors: {},
            isError: true
        }
    }

    handleChangeEmail = e => {
        const rex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        this.setState({
            email: {
                value: e.target.value,
                error: rex.test(e.target.value)
            }
        });
    }
    handleChangePassword = e => {
        this.setState({
            password: {
                value: e.target.value,
                error: e.target.value.length > 7 ? null : 'pass 8 long'
            }
        });
    }

    validate = (email, password) => {
        const err = { ...this.state.errors };
        if (email && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email) === false) {
            err.email = "Invalid Email";
        } else if (password && password.length < 8) {
            err.password = 'password must ne 8 character long'
        }
        return err;
    }

    handleChangePassword = password => {
        let prevState = { ...this.state };

        if (password) {
            prevState.errors = "Invalid Email"
        } else {
            prevState.errors = null
        }

        prevState[password.target.id] = password.target.value;
        this.setState(prevState)

    }

    render() {
        const { errors } = this.state;
        console.log(this.state);
        return (
            <div className="container">

                {/* <div className="form-group">

                    <label htmlFor="Email">Email address</label>

                    <input name='email' autoComplete='off' id='email' onChange={this.handleChangeEmail} type="email" className="form-control" placeholder="" />
                    <div className="text-danger">{this.state.email.error ? null : "Invalid Email"}</div>

                </div> */}

                <div className="form-group">

                    <label htmlFor="password">Password</label>

                    <input name='password' autoComplete='off' id='password' onChange={this.handleChangePassword} type="password" className="form-control" placeholder="Enter password" />
                    <div className="text-danger">{this.state.password.error}</div>

                </div>

                <div className="form-group">
                    <button type="submit" name="action" className={`btn btn-primary btn-block ${this.state.isError ? 'disabled' : ''}`}>
                        Sign In
                    </button>
                </div>
                {/* <input type="email" name='email' value={this.state.email} onChange={this.handleChangeEmail}/>*/}

            </div>
            /*<div className="container">
    
                <div className="row justify-content-center">
    
                    <div className="col-md-6">
    
                        <div className="card">
    
                            <header className="card-header">
    
                                <h4 className="card-title mt-2">Sign In</h4>
    
                            </header>
    
                            <article className="card-body">
    
                                <form>
    
                                    <div className="form-group">
    
                                        <label htmlFor="Email">Email address</label>
    
                                        <input ref="Email" type="email" className="form-control" placeholder=""/>
    
                                    </div>
    
                                    <div className="form-group">
    
                                        <label htmlFor="Password">Password</label>
    
                                        <input ref="Password" className="form-control" type="password"/>
    
                                    </div>
    
                                    <div className="form-group">
                                        <button type="submit" name="action" className="btn btn-primary btn-block"> Sign
                                            In
                                        </button>
                                    </div>
    
    
                                </form>
    
                            </article>
    
                        </div>
    
                    </div>
    
                </div>
    
            </div>*/
        );
    }
}

export default Login;