import React from "react";


class FormTest2 extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        };
    }

    handleEmailChange = (evt) => {
        this.setState({ email: evt.target.value });
    }

    handlePasswordChange = (evt) => {
        this.setState({ password: evt.target.value });
    }

    handleSubmit = () => {
        const { email, password } = this.state;
        alert(`Welcome ${email} password: ${password}`);
    }

    render() {
        const { email, password } = this.state;
        const enabled =
            email.length > 0 &&
            password.length > 0;
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                />
                <button disabled={!enabled}>Login</button>
            </form>
        )
    }
}
    /*constructor(props) {
        super(props);

        this.state = {
            fields: {
                name: '',
                email: '',
                message: ''
            },
            errors: {},
            disabled: false
        }
    }

    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (!fields["name"]) {
            formIsValid = false;
            errors["name"] = "Name field cannot be empty";
        }

        if (typeof fields["name"] !== "undefined" && !fields["name"] === false) {
            if (!fields["name"].match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                errors["name"] = "Only letters";
            }
        }

        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "Email field cannot be empty";
        }

        if (typeof fields["email"] !== "undefined" && !fields["email"] === false) {
            let lastAtPos = fields["email"].lastIndexOf('@');
            let lastDotPos = fields["email"].lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
                formIsValid = false;
                errors["email"] = "Email is not valid";
            }
        }

        if (!fields["message"]) {
            formIsValid = false;
            errors["message"] = " Message field cannot be empty";
        }

        this.setState({errors: errors});
        return formIsValid;
    }

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({fields});
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.handleValidation()) {
            console.log('validation successful')
        } else {
            console.log('validation failed')
        }
    }

    render() {

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit.bind(this)} method="POST">

                    <div className="form-group">

                        <label htmlFor="name">Name</label>

                        <input type="text" placeholder="Enter Name" refs="name"
                               onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]}/>
                        <span style={{color: "red"}}>{this.state.errors["name"]}</span>

                    </div>

                    <div className="form-group">

                        <label htmlFor="exampleInputEmail1">Email address</label>

                        <input type="email" placeholder="Enter Email" refs="email" aria-describedby="emailHelp"
                               onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}/>
                        <span style={{color: "red"}}>{this.state.errors["email"]}</span>

                    </div>

                    <div className="form-group">

                        <label htmlFor="message">Message</label>

                        <textarea type="text" placeholder="Enter Message" rows="5" refs="message"
                                  onChange={this.handleChange.bind(this, "message")}
                                  value={this.state.fields["message"]}/>
                        <span style={{color: "red"}}>{this.state.errors["message"]}</span>

                    </div>

                    <div className="form-group">
                        <button type="submit"
                                disabled={this.state.disabled}>{this.state.disabled ? 'Sending...' : 'Send'}</button>
                    </div>
                </form>
            </div>

        );
    }
}*/

export default FormTest2;