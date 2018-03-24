import wallets from './wallets.json';
import orders from './orders.json';
import trades from './trades.json';

const delay = (ms) => (
  new Promise((resolve) => setTimeout(resolve, ms))
);

export const fakeFetch = (urlGetter, options) => (
  delay(300).then(() => {
    //ugly hack to create immutable copy of file.
    const walletsCopied = JSON.parse(JSON.stringify(wallets));
    const tradesCopied = JSON.parse(JSON.stringify(trades));
    const ordersCopied = JSON.parse(JSON.stringify(orders));
    switch (urlGetter) {
      case "/api/wallets":
        switch (true) {
          default:
            return walletsCopied;
        }
        case "/api/orders":
        switch (true) {
          default:
            return ordersCopied;
        }
        case "/api/trades": // wat
        switch (true) {
          default:
            return tradesCopied;
        }
      default:
        throw new Error('Unknown urlGetter:');
    }
  })
);
