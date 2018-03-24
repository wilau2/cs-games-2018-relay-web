import { call, put, takeLatest } from 'redux-saga/effects';

import request from '../../api/request';

export function* fetchTrades(url) {
  try {
    const wallets = yield call(request, url);
    yield put({type: 'FETCH_TRADES_SUCCESS', wallets});
  } catch (err) {
    console.log('it failed yo.');
  }
}

export function* getTrades() {
  yield fetchTrades("/api/trades", data);
}
