import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';

import {
  LOAD_ORDERS
} from './constants';
import isLoadingReducer from '../../asyncDisplayer/containers/IsLoading/reducer';
import hasErrorReducer from '../../asyncDisplayer/containers/HasError/reducer';
import { SUCCESS } from '../../asyncDisplayer/containers/constants';



export const WALLETS_REDUCER_INITIAL_STATE = fromJS({
  wallets: []
});

function orderReducer(state = WALLETS_REDUCER_INITIAL_STATE, action) {
  switch (action.type) {
    case `${LOAD_ORDERS}${SUCCESS}`:
      return state
      .set('orders', fromJS(action.entity));
    default:
      return state;
  }
}

const options = {
  action: LOAD_ORDERS,
};

export default combineReducers({
  entity: orderReducer,
  isLoading: isLoadingReducer(options),
  hasError: hasErrorReducer(options),
});