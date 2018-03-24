import {CREATE_WALLET, LOAD_WALLETS, MAKE_DEPOSIT} from './constants';

export function loadWallets() {
  return {
    type: LOAD_WALLETS,
  };
}

export function createWallet() {
    return {
        type: CREATE_WALLET,
    };
}

export function makeDeposit() {
    return {
        type: MAKE_DEPOSIT,
    };
}

function orderPDG(sellCAD, tradePrice){

}

function orderCAD(sellPGG, tradePrice){

}

function listOrders(){

}

function cancelOrder(order){

}

function displayOrderBook(){
    return book;
}

function displayCandleGraph(price, date){

}

function displayDepthChart(volume, price){

}