import React from 'react';
import PropTypes from 'prop-types';
import CustomerListItem from './CustomerListItem';
import { accessControl } from './../helpers/accessControl';
import { CUSTOMER_LIST } from '../constants/permissions';

const CustomerList = ({ customers, urlPath }) => {
    return (
        <div>
            <div className="customer-list">
            {
                customers.map(c => {
                    return(
                        <CustomerListItem
                            key={c.dni}
                            name={c.name}
                            dni={c.dni}
                            editAction={'Editar'}
                            delAction={'Eliminar'}
                            urlPath={urlPath}
                        ></CustomerListItem>
                    )
                })
            }
            </div>
        </div>
    );
};

CustomerList.propTypes = {
    customers: PropTypes.array.isRequired,
    urlPath: PropTypes.string.isRequired,
};

export default accessControl([CUSTOMER_LIST])(CustomerList);