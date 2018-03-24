import wallets from './wallets.json';
import account from './account.json';

const delay = (ms) => (
  new Promise((resolve) => setTimeout(resolve, ms))
);

export const fakeFetch = (urlGetter, options) => (
  delay(300).then(() => {
    switch (urlGetter) {
      case "/api/wallets":
        //ugly hack to create immutable copy of file.
        const walletsCopied = JSON.parse(JSON.stringify(wallets));
        return walletsCopied;
      case "/api/accounts":
        //ugly hack to create immutable copy of file.
        const accountsCopied = JSON.parse(JSON.stringify(account));
        return accountsCopied;
      default:
        throw new Error('Unknown urlGetter:');
    }
  })
);
