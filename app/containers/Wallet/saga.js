import { call, put, takeLatest } from 'redux-saga/effects';

import request from '../../api/request';
import { errorAction, successAction } from '../../asyncDisplayer/containers/actions';
import { LOAD_WALLETS, ADD_WALLET } from './constants';

export function* fetchWallets(url, data) {
  try {
    const wallets = yield call(request, url, data);
    yield put(successAction(LOAD_WALLETS, wallets));
  } catch (err) {
    yield put(errorAction(LOAD_WALLETS, err));
  }
}

export function* getWallets(data) {
  yield fetchWallets("/api/wallets", data);
}

export default function* instrumentResultData() {
  yield takeLatest(LOAD_WALLETS, getWallets);
}


export function* addWallet(action) {
  const { text: t } = action

  try {
    const todo = yield call(
      api, 
      '/add-todo', 
      { 
        method: 'POST', 
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: t }) 
      }
    )

    const { _id: id, text } = todo

    yield put({ type: ActionTypes.ADD_TODO_SUCCEEDED, id, text })
  } catch (e) {
    yield put({ type: ActionTypes.ADD_TODO_FAILED, message: e.message })
  }
}

export default function* watchAddTodo() {
  yield* takeLatest(ActionTypes.ADD_TODO_REQUESTED, addTodo)
}