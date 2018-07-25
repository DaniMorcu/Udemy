import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import CustomerActions from './CustomerActions';

class Login extends Component {

    renderField = ( { input, meta, type, label, name, withFocus }) => (
        <div>
            <label htmlFor={name}>{label}</label>
            <div>
                <input {...input} type={!type ? "text" : type}/>
                {
                    meta.touched && meta.error && <span>{meta.error}</span>
                }    
            </div>    
        </div>
    );    

    render() {
        const { handleLogin } = this.props;
        return (
            <form onSubmit={handleLogin}>
                <Field
                    name="username"
                    label="username"
                    type="text"
                    placeholder="Username" 
                    component={this.renderField}/>
                <Field
                    name="password"
                    label="password"
                    type="password"
                    placeholder="Password"
                    component={this.renderField}/>
                <CustomerActions>
                    <button type="submit">
                        Login
                    </button>
                </CustomerActions>
            </form>
        );
    }
}

Login.propTypes = {
    username: PropTypes.string,
    password: PropTypes.string,
};

const loginForm = reduxForm({ 
    form: 'Login',
}) (Login);

export default loginForm;