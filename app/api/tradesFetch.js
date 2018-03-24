import trades from './trades.json';

const delay = (ms) => (
  new Promise((resolve) => setTimeout(resolve, ms))
);

export const fakeFetch = (urlGetter, options) => (
  delay(300).then(() => {
    //ugly hack to create immutable copy of file.
    const tradesCopied = JSON.parse(JSON.stringify(trades));
    switch (urlGetter) {
      case "/api/trades":
        switch (true) {
          default:
            return tradesCopied;
        }
      default:
        throw new Error('Unknown urlGetter:');
    }
  })
);
