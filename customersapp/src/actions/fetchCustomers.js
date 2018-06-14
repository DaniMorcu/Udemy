import { FETCH_CUSTOMERS } from './../constants';
import { createAction } from 'redux-actions';

// Este objeto se lo pasaremos en el payload
const url = 'http://localhost:3001/customers';












const apiFetchCustomers = () => fetch(url).then(c => c.json());

export const fetchCustomers = createAction(FETCH_CUSTOMERS, () => apiFetchCustomers);
