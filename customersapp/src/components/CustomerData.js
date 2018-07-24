import React from 'react';
import PropTypes from 'prop-types';
import CustomerActions from './CustomerActions';

const CustomerData = ({ id, name, age, dni, onBack, isDeleteAllow, onDelete }) => {
    return (
        <div>
            <div className="customer-data">
                <div>Datos del cliente</div>
                <div><strong>Nombre <i>{name}</i></strong></div>
                <div><strong>DNI <i>{dni}</i></strong></div>
                <div><strong>Edad <i>{age}</i></strong></div>
            </div>
            <CustomerActions>
                <button onClick={onBack}>Volver</button>
                {isDeleteAllow && 
                    <button onClick={() => onDelete(id)}>Eliminar</button>
                }
            </CustomerActions>
        </div>
    );
};

CustomerData.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    dni: PropTypes.number.isRequired,
    age: PropTypes.number,
    onBack: PropTypes.func.isRequired,
    isDeleteAllow: PropTypes.bool,
    onDelete: PropTypes.func,
};

export default CustomerData;