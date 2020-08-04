import React from "react";

class VerifyEmail extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: localStorage.getItem("email")
        };
    }
    componentDidMount() {

    }

    render() {
        return (
            <div className="container">

                <div className="row justify-content-center">

                    <div className="col-md-6">

                        <div className="card">

                            <header className="card-header">

                                <h4 className="card-title mt-2">Verify OTP send to {this.state.email}</h4>

                            </header>

                            <article className="card-body">

                                <form>

                                    <div className="form-group">

                                        <label htmlFor="Email">Enter OTP</label>

                                        <input ref="OTP" type="text" className="form-control" placeholder=""/>

                                    </div>

                                    <div className="form-group">
                                        <button type="submit" name="action" className="btn btn-primary btn-block">Verify
                                            Email
                                        </button>
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

export default VerifyEmail;
