import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import AppFrame from '../components/AppFrame';
import CustomerList from './../components/CustomerList';
import CustomerActions from '../components/CustomerActions';

const customers = [
    {
        "dni": "53505050A",
        "name": "Antonio",
        "age": 36
    },
    {
        "dni": "53505050B",
        "name": "Sonia",
        "age": 15
    },
    {
        "dni": "53505050C",
        "name": "Lina",
        "age": 54
    },
    {
        "dni": "53505050D",
        "name": "Jose",
        "age": 25
    }
]

class CustomersContainer extends Component {
    
    handleAddNew = () => {
        this.props.history.push('customers/new');
    }

    renderBody = customers => (
        <div>
            <CustomerList 
                customers={customers} 
                urlPath={'customers/'}
            ></CustomerList>
            <CustomerActions>
                <button onClick={this.handleAddNew}>Nuevo cliente</button>
            </CustomerActions>
        </div>
    );
    
    render() {
        return (
            <div>
                <AppFrame 
                    header={'Listado de clientes'}
                    body={this.renderBody(customers)}
                ></AppFrame>
            </div>
        );
    }
}

export default withRouter(CustomersContainer);