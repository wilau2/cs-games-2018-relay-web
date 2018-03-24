import { LOAD_WALLETS, CREATE_WALLET, DEPOSIT_TO_WALLET, FIND_WALLET_BY_ACCOUNT, SHOW_CURRENCY_AND_AMOUNT_WALLET, TOTAL_VALUE_WALLETS_BY_ACCOUNT, TRADE_PRICE_WALLET } from './constants';

export const loadWallets = () => ({
  type: LOAD_WALLETS,
});

export const createWallet = () => ({
  type: CREATE_WALLET,
  payload: {},
});

export const depositeToWallet = () => ({
  type: DEPOSIT_TO_WALLET,
});

export const findWalletByAccount = () => ({
  type: FIND_WALLET_BY_ACCOUNT,
});

export const showCurrenyAndAmountWallet = () => ({
  type: SHOW_CURRENCY_AND_AMOUNT_WALLET,
});

export const totalValueWalletsByAccount = () => ({
  type: TOTAL_VALUE_WALLETS_BY_ACCOUNT,
});

export const tradePriceWallet = () => ({
  type: TRADE_PRICE_WALLET,
});

