import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { setPropsAsInitial } from './../helpers/setPropsAsInitial';


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

const isRequired = value => ( 
    !value && "Este campo es requerido"
);

const MyField = ( { input, meta, type }) => (
    <div>
        <input {...input} type={!type ? "text" : type}/>
        {
            meta.touched && meta.error && <span>{meta.error}</span>
        }        
    </div>
);

const CustomerEdit = props => {
    return (
        <div>
            <h2>Edición del cliente</h2>
            <form action="">
                <div>
                    <label htmlFor="name">Nombre</label>
                    <Field 
                        name="name" 
                        component={MyField} 
                        validate={isRequired}>
                    </Field>
                </div>
                <div>
                    <label htmlFor="dni">DNI</label>
                    <Field
                        name="dni" 
                        component={MyField}
                        validate={isRequired}>
                    </Field>
                </div>
                <div>
                    <label htmlFor="age">Edad</label>
                    <Field 
                        name="age" 
                        component={MyField}
                        type="number"
                        validate={isNumber}>
                    </Field>
                </div>
            </form>
        </div>
    );
};

CustomerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number,
};

const customereditForm = reduxForm({ form: 'CustomerEdit'}) (CustomerEdit);

export default setPropsAsInitial(customereditForm);