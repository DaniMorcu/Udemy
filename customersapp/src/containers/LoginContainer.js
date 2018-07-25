import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import { SubmissionError } from 'redux-form';
import Login from '../components/Login';

class LoginContainer extends Component {
    
    handleLogin = values => {
        console.log('handleLogin');
        const { id } = values;
        return this.props.login(id, values).then( r => {
            if (r.error) {
                throw new SubmissionError(r.payload);
            }
        }).catch(e => {
            throw new SubmissionError(e);
        });
    }
    
    render() {
        return (
            <div>
                <AppFrame
                    header="Login"
                    body={
                        <Login 
                            onSubmit={this.handleLogin}>
                        </Login>
                    }>                    
                </AppFrame>
            </div>
        );
    }
}

// LoginContainer.propTypes = {

// };

export default LoginContainer;