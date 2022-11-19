const Quote = require("inspirational-quotes");
var cowsay = require("cowsay");

const a = 10;
const b = 11;

const c = [1, 2, 3, 4, 5];
const squared_c = c.map;

function square(a) {
  return a * a;
}

if (a > b) {
  console.log("a is greater");
} else {
  console.log("b is greater");
}

function is_odd(x) {
  return x % 2 == 1;
}

console.log(Quote.getQuote()); // returns quote (text and author)
//console.log(Quote.getQuote({ author: false })); // return quote without author
//console.log(Quote.getRandomQuote()); // return any random quote

console.log(
  cowsay.say({
    text: Quote.getQuote().text,
    e: "oO",
    T: "U ",
  })
);
