import { createAction } from 'redux-actions';
import { UPDATE_CUSTOMER } from "../constants";
import { putApi } from '../api';
import { urlCustomers } from '../api/urls';

export const updateCustomer = createAction(UPDATE_CUSTOMER, 
    (id, customer) => putApi(urlCustomers, id, customer)());