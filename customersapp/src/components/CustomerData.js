import React from 'react';
import PropTypes from 'prop-types';

const CustomerData = props => {
    return (
        <div>
            <div className="customer-data">
                <h2></h2>
                <div>Datos del cliente</div>
                <div><strong>Nombre <i>{name}</i></strong></div>
                <div><strong>DNI <i>{dni}</i></strong></div>
                <div><strong>Edad <i>{age}</i></strong></div>
            </div>
        </div>
    );
};

CustomerData.propTypes = {
    name: PropTypes.string.isRequired,
    dni: PropTypes.number.isRequired,
    age: PropTypes.number,
};

export default CustomerData;