import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import axios from 'axios';

const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);


const validateForm = errors => {
    // Object.values(errors).forEach(val => {
    //     console.log(val);
    //     // if (key > 0) {
    //     //     console.log(errors.key);
    //     //     return true
    //     // }
    // });
    // return false;


    switch (errors) {
        case errors.Email:
            errors.Email =
                validEmailRegex.test(errors.Email) ? '' : 'Email is not valid!';
            break;

        case errors.Password:
            errors.Password =
                errors.Password.length < 8 ? 'Password must be at least 8 characters long!' : '';
            break;

        default:
            break;
    }
};

class Login2 extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            Email: '',
            Password: '',
            errors: {
                Email: '',
                Password: '',
            },
            isButtonDisabled: true,
        }
    }



    handleChange = (e) => {
        e.preventDefault();
        let errors = this.state.errors;

        this.setState({ errors, [e.target.name]: e.target.value });



    }

    handleSubmit = (event) => {
        event.preventDefault();

        const header = {
            'Content-Type': 'application/json',
            'x-api-key': '2020'

        };

        const data = JSON.stringify({
            Email: this.state.Email,
            Password: this.state.Password,
        })

        console.log('errors', validateForm(this.state.errors));
        return;

        if (validateForm(this.state.errors)) {
            return toast.error('Invalid form')
        };

        axios.post('http://103.16.73.242:5000/api/registration', data, {
            headers: header
        }).then(res => {
            if (res.status === 200) {
                console.log(res.data)
                toast.success("Registration Success");
                this.setState({ isRegister: true });
                return res;
            }
        }).catch(error => {
            if (error.response && error.response.status >= 400 && error.response.status < 500) {
                toast.error(error.response.data.message);
                console.log(error.response.data.message);
            } else {
                console.log(error.response.data.message);
                toast.error('Something went wrong. please try again later!');
            }
        })
        console.log(data)
        console.info('Valid Form')
    }



    render() {

        const { errors } = this.state;

        return (
            <div className='wrapper'>
                <div className='form-wrapper'>

                    <h2>Create Account</h2>

                    <form onSubmit={this.handleSubmit} noValidate>

                        <div className='email'>
                            <label htmlFor="Email">Email</label>
                            <input type='email' name='Email' onChange={this.handleChange} noValidate />
                            {errors.Email.length > 0 &&
                                <span className='error'>{errors.Email}</span>}
                        </div>

                        <div className='password'>
                            <label htmlFor="Password">Password</label>
                            <input type='password' name='Password' onChange={this.handleChange} noValidate />
                            {errors.Password.length > 0 && <span className='error'>{errors.Password}</span>}
                        </div>

                        <div className='submit'>
                            <button>Create</button>
                            <ToastContainer />
                        </div>

                    </form>
                </div>
            </div>
        );
    }
}

export default Login2;