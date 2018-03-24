import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';

import {
  LOAD_TRADES
} from './constants';
import isLoadingReducer from '../../asyncDisplayer/containers/IsLoading/reducer';
import hasErrorReducer from '../../asyncDisplayer/containers/HasError/reducer';
import { SUCCESS } from '../../asyncDisplayer/containers/constants';



export const TRADES_REDUCER_INITIAL_STATE = fromJS({
  trades: []
});

function tradeReducer(state = TRADES_REDUCER_INITIAL_STATE, action) {
  switch (action.type) {
    case `${LOAD_TRADES}${SUCCESS}`:
      return state
      .set('trades', fromJS(action.entity));
    default:
      return state;
  }
}

const options = {
  action: LOAD_TRADES,
};

export default combineReducers({
  entity: tradeReducer,
  isLoading: isLoadingReducer(options),
  hasError: hasErrorReducer(options),
});