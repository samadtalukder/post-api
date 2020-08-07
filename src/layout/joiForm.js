import React, { Component } from 'react';
import Joi from 'joi-browser';
import { toast } from 'react-toastify';



class JoiForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            errors: {}
        }
    }

    schema = {
        Email: Joi.string().email({ tlds: { allow: false } }),
        Password: Joi.string().min(8)
    }

    validate = () => {
        const options = { abortEarly: false };
        const { error } = Joi.validate(this.state.data, this.schema, options);
        if (!error) return null;

        const errors = {};
        for (let item of error.details) errors[item.path[0]] = item.message;
        return errors;
    };

    validateProperty = ({ name, value }) => {
        const obj = { [name]: value };
        const schema = { [name]: this.schema[name] };
        const { error } = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;
    };


    handleSubmit = e => {
        e.preventDefault();
        const errors = this.validate();
        this.setState({ errors: errors || {} });
        if (errors) {
            Object.values(errors).map(val => {
                console.log(val);
                toast.error(val)
            })
            return;
        };

        const { data } = this.state;
        // call te backend api below
    };

    handleChange = ({ currentTarget: input }) => {
        const errors = { ...this.state.errors };
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const data = { ...this.state.data };
        data[input.name] = input.value;

        this.setState({ data, errors });
    };


    render() {

        const { data, errors } = this.state;

        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="Email">Email address</label>
                        <input name='Email' autoComplete='off' id='Email' value={data.Email} onChange={this.handleChange} className="form-control" placeholder="" />
                        {errors.Email && <div className="text-danger">{errors.Email}</div>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="Password">Password</label>
                        <input name='Password' autoComplete='off' id='Password' value={data.Password} onChange={this.handleChange} type="password" className="form-control" placeholder="Enter password" />
                        {errors.Password && <div className="text-danger">{errors.Password}</div>
                        }
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        );
    }
}

export default JoiForm;