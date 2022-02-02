import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createForms } from 'react-redux-form';
import logger from 'redux-logger';
import { InitialReservation } from './forms';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            ...createForms({
                reservationForm: InitialReservation
            })
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
};