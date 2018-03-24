import { call, put, takeLatest } from 'redux-saga/effects';

import request from '../../api/request';
import { errorAction, successAction } from '../../asyncDisplayer/containers/actions';
import { LOAD_TRADES } from './constants';

export function* fetchTrades(url, data) {
  try {
    const trades = yield call(request, url, data);
    yield put(successAction(LOAD_TRADES, trades));
  } catch (err) {
    yield put(errorAction(LOAD_TRADES, err));
  }
}

export function* getTrades(data) {
  yield fetchTrades("/api/trades", data);
}

export default function* instrumentResultData() {
  yield takeLatest(LOAD_TRADES, getTrades);
}