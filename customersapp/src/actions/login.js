import { createAction } from 'redux-actions';
import { LOGIN } from "../constants";
import { urlCustomers } from '../api/urls';

export const updateCustomer = createAction(LOGIN, 
    (user) => postApi(urlCustomers, id, customer)());