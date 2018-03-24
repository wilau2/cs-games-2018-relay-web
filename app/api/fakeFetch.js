import wallets from './wallets.json';
import accounts from './account.json';

const delay = (ms) => (
  new Promise((resolve) => setTimeout(resolve, ms))
);

export const fakeFetch = (urlGetter, options) => (
  delay(300).then(() => {
    //ugly hack to create immutable copy of file.
    const walletsCopied = JSON.parse(JSON.stringify(wallets));
    const accountsCopied = JSON.parse(JSON.stringify(accounts));
    switch (urlGetter) {
      case "/api/wallets":
          return walletsCopied;
      case "/api/accounts":
          return accountsCopied;
      default:
        throw new Error('Unknown urlGetter:');
    }
  })
);
