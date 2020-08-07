import React from "react";


class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errors: null,
            isError: true
        }
    }

    handleChangeEmail = email => {
        let prevState = { ...this.state };

        if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(prevState.email) === false) {
            prevState.errors = "Invalid Email";
        } else {
            prevState.errors = null
            prevState.isError = false;
        }

        prevState[email.target.id] = email.target.value;
        console.log(this.state.email)
        this.setState(prevState)

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

        return (
            <div className="container">
                <div className="form-group">

                    <label htmlFor="Email">Email address</label>

                    <input name='email' autoComplete='off' id='email' value={this.state.email} onChange={this.handleChangeEmail} type="email" className="form-control" placeholder="" />
                    <div className="text-danger">{this.state.errors}</div>

                </div>

                <div className="form-group">

                    <label htmlFor="Email">Email address</label>

                    <input name='email' autoComplete='off' id='email' value={this.state.email} onChange={this.handleChangeEmail} type="email" className="form-control" placeholder="" />
                    <div className="text-danger">{this.state.errors}</div>

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