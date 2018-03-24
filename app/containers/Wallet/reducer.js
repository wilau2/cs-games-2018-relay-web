import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import apiRequest from '../../api/request';

import {
  LOAD_WALLETS,
  CREATE_WALLET
} from './constants';
import isLoadingReducer from '../../asyncDisplayer/containers/IsLoading/reducer';
import hasErrorReducer from '../../asyncDisplayer/containers/HasError/reducer';
import { SUCCESS } from '../../asyncDisplayer/containers/constants';



export const WALLETS_REDUCER_INITIAL_STATE = fromJS({
  wallets: []
});

function walletReducer(state = WALLETS_REDUCER_INITIAL_STATE, action) {
  switch (action.type) {
    case `${LOAD_WALLETS}${SUCCESS}`:
      return state
        .set('wallets', fromJS(action.entity));
    case CREATE_WALLET:
      apiRequest('/api/wallets')
        .then((data) => {
          console.log(data);
          let newWalletData = {
            address: '123 456 new address',
            amount: 0,
            currency: "PGG",
            username: action.username,
          }
          data.push(newWalletData);
          console.log(data);
        }
        );
      return state;

    // state.set('wallets', fro)
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