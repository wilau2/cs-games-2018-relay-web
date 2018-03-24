import wallets from './wallets.json';
import accounts from './account.json';
import trades from './trades.json';
import orders from './orders.json';

const delay = (ms) => (
  new Promise((resolve) => setTimeout(resolve, ms))
);

export const fakeFetch = (urlGetter, options) => (
  delay(300).then(() => {
    switch (urlGetter) {
      case "/api/wallets":
        switch (true) {
          default:
            //ugly hack to create immutable copy of file.
            const walletsCopied = JSON.parse(JSON.stringify(wallets));

            // filter on account
            if (options.account) {
              return walletsCopied.filter((wallet) => {
                return wallet.username == options.account;
              });
            } else return walletsCopied;
        }
      case "/api/accounts":
        switch (true) {
          default:
            //ugly hack to create immutable copy of file.
            const accountsCopied = JSON.parse(JSON.stringify(accounts));
            return accountsCopied;
        }
      case "/api/trades":
        switch (true) {
          default:
            //ugly hack to create immutable copy of file.
            const tradesCopied = JSON.parse(JSON.stringify(trades));
            return tradesCopied;
        }
      case "/api/orders":
        switch (true) {
          default:
            //ugly hack to create immutable copy of file.
            const ordersCopied = JSON.parse(JSON.stringify(orders));
            return ordersCopied;
        }
      default:
        throw new Error('Unknown urlGetter:');
    }
  })
);
