import { createAction } from 'redux-actions';
import { DELETE_CUSTOMER } from "../constants";
import { deleteApi } from '../api';
import { urlCustomers } from '../api/urls';

export const deleteCustomer = createAction(DELETE_CUSTOMER, 
    (id) => deleteApi(urlCustomers, id)());