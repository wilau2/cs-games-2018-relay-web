import { call, put, takeLatest } from 'redux-saga/effects';

import request from '../../api/request';
import { errorAction, successAction } from '../../asyncDisplayer/containers/actions';
import { LOAD_ORDERS } from './constants';

export function* fetchOrders(url, data) {
  try {
    const orders = yield call(request, url, data);
    yield put(successAction(LOAD_ORDERS, orders));
  } catch (err) {
    yield put(errorAction(LOAD_ORDERS, err));
  }
}

export function* getOrders(data) {
  yield fetchOrders("/api/orders", data);
}

export default function* instrumentResultData() {
  yield takeLatest(LOAD_ORDERS, getOrders);
}