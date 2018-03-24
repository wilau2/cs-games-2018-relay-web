import {CREATE_WALLET, LOAD_WALLETS} from './constants';

export function loadWallets() {
    return {
        type: LOAD_WALLETS,
    };
}

export function createWallet() {
    return {
        type: CREATE_WALLET
    }
}