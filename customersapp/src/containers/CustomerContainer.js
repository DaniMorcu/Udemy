import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, withRouter } from 'react-router-dom';
import AppFrame from './../components/AppFrame';
import { getCustomersByDni } from '../selectors/customers';
import CustomerEdit from '../components/CustomerEdit';
import CustomerData from './../components/CustomerData';
import { fetchCustomers } from './../actions/fetchCustomers';
import { updateCustomer } from './../actions/updateCustomer';

class CustomerContainer extends Component {
    
    componentDidMount(){
        if(!this.props.customer){
            this.props.fetchCustomers();
        }
    }

    handleSubmit = values => {
        // Visualizar el formato de los valores recogidos
        console.log(JSON.stringify(values));
        const { id } = values;
        this.props.updateCustomer(id, values);
    }

    handleOnBack = () => {
        this.props.history.goBack();
    }

    renderBody = () => (
        <Route path="/customers/:dni/edit" children={
            ({ match }) => {
                const CustomerControl = match ?  CustomerEdit : CustomerData;
                return <CustomerControl {...this.props.customer}
                    onSubmit={this.handleSubmit} onBack={this.handleOnBack}/>
            }
        } />
    )    
q   
    render() {
            return (
                <div>
                    <AppFrame 
                        header={`Cliente ${this.props.dni}`}
                        body={this.renderBody()}>
                    </AppFrame>
                </div>
            );
        }
    }

CustomerContainer.propTypes = {
    dni: PropTypes.string.isRequired,
    customer: PropTypes.object,
    fetchCustomers: PropTypes.func.isRequired,
    updateCustomer: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
    customer: getCustomersByDni(state, props)
});

// const mapDispatchToProps = dispatch => {
//     fetchCustomers
// }

export default withRouter(connect(mapStateToProps, {fetchCustomers, updateCustomer})(CustomerContainer));