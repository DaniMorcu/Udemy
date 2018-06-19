import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import AppFrame from './../components/AppFrame';
import { getCustomersByDni } from '../selectors/customers';
import CustomerEdit from '../components/CustomerEdit';
import CustomerData from './../components/CustomerData';

class CustomerContainer extends Component {
    
    renderBody = () => (
        <Route path="/customers/:dni/edit" children={
            ({ match }) => {
                // Tipo de componente determinado en ejecución
                const CustomerControl = match ?  CustomerEdit : CustomerData;
                return <CustomerControl {...this.props.customer} />
            }
        } />
    )    
// <p>Es edición {this.props.customer.name} {this.props.customer.age} {this.props.customer.dni}</p> : 

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
    customer: PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => ({
    customer: getCustomersByDni(state, props)
})

export default connect(mapStateToProps, null)(CustomerContainer);