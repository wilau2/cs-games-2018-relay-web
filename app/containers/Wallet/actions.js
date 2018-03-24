import { LOAD_WALLETS, ADD_TO_WALLET } from './constants';

export function loadWallets(filter) {
  return {
    type: LOAD_WALLETS,
    username: filter
  };
}

export function addToWallet(amt = 0) {
  return {
    type: ADD_TO_WALLET,
    amt
  };
}