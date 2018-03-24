import { LOAD_WALLETS, ADD_WALLET } from './constants';

export function loadWallets() {
  return {
    type: LOAD_WALLETS,
  };
}

export function addWallet({address, username}) {
  return {
    type: ADD_WALLET,
    payload: {address, username}
  };
}