import { LOAD_WALLETS, CREATE_WALLET } from './constants';

export function loadWallets() {
  return {
    type: LOAD_WALLETS,
  };
}

export function createWallet(username) {
  console.log(username);
  return {
    type: CREATE_WALLET,
    username
  };
}
