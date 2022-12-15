//Step 1 and following 2
//console.log("Hello World");

//Step 2
let myName = "Lars";
console.log(myName);

//Step 3
const greeting = "Hallo";
console.log(greeting + " " + myName);

//
//
//Task: Net and Gross Price
const netPrice = 25;
const tax = 19;
let grossPrice = (netPrice * (100 + tax)) / 100;
console.log(grossPrice);

//
//
//Task: Spot the errors

// console.log("Hallo"; is incorrect, the correct way in the following line

console.log("Hallo");

// const a = 1;
// a = 2;         is incorrect, the correct way in the following lines

let a = 1;
a = 2;

// const 1 = "a";  is incorrect, the correct way in the following line

const b = "1";

// needed to switch the variable name to b, to avoid errors

// const let = undefined; is incorrect, the correct way in the following lines

const anyOtherName = undefined; //or
const anyOtherOtherName = "undefined"; //if you want to log this exact string

// you cannot name variables like datatypes, undefined is the standart of empty variables
// if you want to work with empty variables without errors, see the following line

const needNothing = null;

// return;
// console.log("I cant see the console log in the console?!");  correct way in the following lines

console.log("I cant see the console log in the console?!");
//return statement is for functions"

// console.log("That doesn"t work"); is incorrect, the correct way in the following line

console.log("That doesn't work");

//
//
//
//
// Task day 2

//
//
// Gross Price Function

function calcGrossPrice(netPrice, taxRate) {
  if (
    netPrice >= 1 &&
    typeof netPrice === "number" &&
    netPrice !== undefined &&
    taxRate < 1 &&
    typeof netPrice === "number" &&
    netPrice !== undefined
  ) {
    const finalPrice = netPrice * (1 + taxRate);
    return finalPrice;
  } else {
    console.error(
      "Argument ONE has to be a 'number' > 1, Argument TWO has to be a 'number' < 1"
    );
  }
}

const result1 = calcGrossPrice(20, 0.19);
console.log(result1);

const result2 = calcGrossPrice(40, 0.16);
console.log(result2);

//
//
// Add Positive Function
