import { fromJS } from 'immutable';
import { SUCCESS } from '../../asyncDisplayer/containers/constants';

export const TRADES_REDUCER_INITIAL_STATE = fromJS({
  wallets: []
});

export default (state = TRADES_REDUCER_INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOAD_TRADES_SUCCESS':
      return state
      .set('trades', fromJS(action.entity));
    default:
      return state;
  }
}


