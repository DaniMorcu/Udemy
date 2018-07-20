import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { setPropsAsInitial } from './../helpers/setPropsAsInitial';
import CustomerActions from './../components/CustomerActions';
/* 
//TODO
const validateDni = value => {
    var numero, leta, letra;
    var expresion_regular_dni = /^[XYZ]?\d{5,8}[A-Z]$/;
    value = value.toUpperCase();

    if(expresion_regular_dni.test(value) === true){
        numero = value.substr(0,value.length-1);
        numero = numero.replace('X', 0);
        numero = numero.replace('Y', 1);
        numero = numero.replace('Z', 2);
        leta = value.substr(value.length-1, 1);
        numero = numero % 23;
        letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
        letra = letra.substring(numero, numero+1);
        if (letra != leta) {
            return false;
        }else{
            return true;
        }
    }
    else {
        return false;
    }
}
    
const isDni = value => (
    validateDni(value) && "No es un DNI correcto"
)
*/

const isNumber = value => (
    isNaN(Number(value)) && "El campo debe ser un número"
);

// const isRequired = value => ( 
//     !value && "Este campo es requerido"
// );

const validate = values => {
    const error = {};

    // El campo name como requerido
    if(!values.name){
        error.name = "El campo nombre es requerido";
    }

    if(!values.dni){
        error.dni = "El campo dni es requerido";
    }

    return error;
}

const MyField = ( { input, meta, type, label, name }) => (
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

const CustomerEdit = ({name, dni, age, handleSubmit, submitting, onBack}) => {
    return (
        <div>
            <h2>Edición del cliente</h2>
            <form onSubmit={handleSubmit}>
                <Field 
                    name="name" 
                    component={MyField} 
                    // validate={isRequired}
                    label="Nombre">
                </Field>
                <Field
                    name="dni" 
                    component={MyField}
                    validate={isNumber}
                    label="DNI">
                </Field>
                <Field 
                    name="age" 
                    component={MyField}
                    type="number"
                    validate={isNumber}
                    label="Edad">
                </Field>
                <CustomerActions>
                    <button type="submit" disabled={submitting}>Aceptar</button>
                    <button onClick={onBack}>Cancelar</button>
                </CustomerActions>
            </form>
        </div>
    );
};

CustomerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number,
    onBack: PropTypes.func.isRequired,
};

const customereditForm = reduxForm({ 
    form: 'CustomerEdit',
    validate 
}) (CustomerEdit);

export default setPropsAsInitial(customereditForm);