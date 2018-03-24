import { LOAD_WALLETS } from './constants';
//I think that there are much more actions available to add here, but I really cannot find them
//I know that they are from constants
export function loadWallets() {
  return {
    type: LOAD_WALLETS,
  };
}
