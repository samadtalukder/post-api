import React from "react";

class Login extends React.Component {
    render() {
        return(
            <div className="container">

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
                                        <button type="submit" name="action" className="btn btn-primary btn-block"> Sign In</button>
                                    </div>



                                </form>

                            </article>

                        </div>

                    </div>

                </div>

            </div>
        );
    }
}

export default Login;