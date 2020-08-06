import React from "react";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

class VerifyEmail extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: localStorage.getItem("email"),
            isVerified: false,
        };
    }

    verifyOTP(otp) {
        otp.preventDefault();

        let verifyOTPData = {
            Email: this.state.email,
            OTP: this.refs.OTP.value,
        };

        console.log(verifyOTPData);

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': '2020'
            },
            body: JSON.stringify(verifyOTPData),
        };

        console.log(requestOptions);

        fetch('http://103.16.73.242:5000/api/otp', requestOptions)
            .then(response => {
                if (response.status === 200) {
                    console.log("Response: ", response);
                    toast.success("Successfully Verified");
                    this.setState({isVerified: true});
                    return response;

                } else {
                    toast.error("Wrong OTP");
                    toast.warning("Wrong OTP");
                    console.log("Something Wrong");
                }
            })
            .then(data => {
                this.setState({printMessage: data})
                console.log(data)
            });
    }

    render() {

        const {isVerified} = this.state;

        if (isVerified) {
            window.location.href = '/'
        }

        return (
            <div className="container">

                <div className="row justify-content-center">

                    <div className="col-md-6">

                        <div className="card">

                            <header className="card-header">
                                <h5 className="card-title mt-2">Your Verify OTP Send To</h5>
                                <h4 className="card-title mt-2"> {this.state.email}</h4>

                            </header>

                            <article className="card-body">

                                <form onSubmit={this.verifyOTP.bind(this)}>

                                    <div className="form-group">

                                        <label htmlFor="Email">Enter OTP</label>

                                        <input ref="OTP" type="text" className="form-control" placeholder=""/>

                                    </div>

                                    <div className="form-group">
                                        <button type="submit" name="action" className="btn btn-primary btn-block">Verify
                                            Email
                                        </button>
                                        <ToastContainer/>
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
