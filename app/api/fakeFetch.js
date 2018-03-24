import wallets from './wallets.json';
import orders from './orders.json';

const delay = (ms) => (
  new Promise((resolve) => setTimeout(resolve, ms))
);

export const fakeFetch = (urlGetter, options) => (
  delay(300).then(() => {
    //ugly hack to create immutable copy of file.
    const walletsCopied = JSON.parse(JSON.stringify(wallets));
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
      default:
        throw new Error('Unknown urlGetter:');
    }
  })
);
