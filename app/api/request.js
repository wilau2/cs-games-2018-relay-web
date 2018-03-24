import { fakeFetch } from './fakeFetch';

// Hi this is brandon
// This function gets called when you hit the button on the screen

// Node.js and webpack and react.js horrify me and I am not good at this
// Why is this call "mocked" it looks ok to me?

// What is any of this
// I am very sorry but I cannot make any sense of this "magic"
// I can't learn the whole JS ecosystem in an hour!

// Furthermore after much time looking I cannot find where
// this function is "attached" to the button like in any normal world

// I'd like to make a new button that does some new things, like display orders
// But, there's no HTML anywhere, I don't even know where I could make one :\

// Okay wait, last 5 minutes I've found it
// It's all inside the Wallet folder inside of containers
// Inside index.js inside Wallet
// maybe look there?

// My best bet is to look there and try to copy it, perhaps
// and make a version that works with orders too instead of just wallets
// to display them on the screen

const request = (urlGetter, options) => {
  console.log('this is a mocked call');

  var orders = require('./orders.json');
  console.log(orders); // wow look it shows up in the dev console

  return fakeFetch(urlGetter, options);
};
export default request;
