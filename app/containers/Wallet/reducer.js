import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';

import {
  LOAD_WALLETS,
    DEPOSIT_TO_WALLET,
    TRADE_PRICE_WALLET,
    TOTAL_VALUE_WALLETS_BY_ACCOUNT,
    SHOW_CURRENCY_AND_AMOUNT_WALLET,
    FIND_WALLET_BY_ACCOUNT,
    CREATE_WALLET,
} from './constants';
import isLoadingReducer from '../../asyncDisplayer/containers/IsLoading/reducer';
import hasErrorReducer from '../../asyncDisplayer/containers/HasError/reducer';
import { SUCCESS } from '../../asyncDisplayer/containers/constants';


export const WALLETS_REDUCER_INITIAL_STATE = fromJS({
  wallets: [],
  selected_username: null,
  selected_wallet: null,
  selected_address: null,
});

function walletReducer(state = WALLETS_REDUCER_INITIAL_STATE, action) {
  switch (action.type) {
    case `${LOAD_WALLETS}${SUCCESS}`:
      return state
      .set('wallets', fromJS(action.entity));
    case `${DEPOSIT_TO_WALLET}${SUCCESS}`:
      return state
              .set('wallets', fromJS(action.entity));
    case `${TRADE_PRICE_WALLET}${SUCCESS}`:
      return state
              .set('wallets', fromJS(action.entity));
    case `${TOTAL_VALUE_WALLETS_BY_ACCOUNT}${SUCCESS}`:
      return state
              .set('wallets', fromJS(action.entity));
    case `${SHOW_CURRENCY_AND_AMOUNT_WALLET}${SUCCESS}`:
      return state
              .set('wallets', fromJS(action.entity));
    case `${FIND_WALLET_BY_ACCOUNT}${SUCCESS}`:
      return state
              .set('wallets', fromJS(action.entity));
    case `${CREATE_WALLET}${SUCCESS}`:
      return state
              .set('wallets', fromJS(action.entity));
    default:
      return state;
  }
}

const options = {
  action: LOAD_WALLETS,
};

export default combineReducers({
  entity: walletReducer,
  isLoading: isLoadingReducer(options),
  hasError: hasErrorReducer(options),
});
