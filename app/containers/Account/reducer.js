import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';

import {LOAD_ACCOUNTS } from './constants';
import isLoadingReducer from '../../asyncDisplayer/containers/IsLoading/reducer';
import hasErrorReducer from '../../asyncDisplayer/containers/HasError/reducer';
import { SUCCESS } from '../../asyncDisplayer/containers/constants';



export const ACCOUNTS_REDUCER_INITIAL_STATE = fromJS({
  accounts: []
});

function accountReducer(state = ACCOUNTS_REDUCER_INITIAL_STATE, action) {
  switch (action.type) {
    case `${LOAD_ACCOUNTS}${SUCCESS}`:
      return state
      .set('accounts', fromJS(action.entity));
    default:
      return state;
  }
}

const options = {
  action: LOAD_ACCOUNTS,
};

export default combineReducers({
  entity: accountReducer,
  isLoading: isLoadingReducer(options),
  hasError: hasErrorReducer(options),
});