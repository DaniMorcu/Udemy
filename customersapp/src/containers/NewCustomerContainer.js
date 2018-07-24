import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SubmissionError } from 'redux-form';
import AppFrame from './../components/AppFrame';
import CustomerEdit from '../components/CustomerEdit';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { insertCustomer } from './../actions/insertCustomer';

class NewCustomerContainer extends Component {
    
    handleSubmit = values => {
        return this.props.insertCustomer(values).then( r => {
            if (r.error) {
                throw new SubmissionError(r.payload);
            }
        }).catch(e => {
            throw new SubmissionError(e);
        });
    }

    handleOnSubmitSuccess = () => {
        this.props.history.goBack();
    }

    handleOnBack = () => {
        this.props.history.goBack();
    }

    renderBody = () => {

        const newCustomer = {
            "id": "",
            "name": "",
            "dni": "",
            "age": 0
        }

        return (
            <CustomerEdit {...newCustomer}
                onSubmit={this.handleSubmit}
                onSubmitSuccess={this.handleOnSubmitSuccess}
                onBack={this.handleOnBack}>
            </CustomerEdit>
        
        )
            
    }

    render() {
        return (
            <div>
                <AppFrame 
                    header={`Creación de nuevo cliente`}
                    body={this.renderBody()}
                ></AppFrame>
            </div>
        );
    }
}

NewCustomerContainer.propTypes = {
    insertCustomer: PropTypes.func.isRequired,
};

export default withRouter(connect(null, { insertCustomer } )(NewCustomerContainer));