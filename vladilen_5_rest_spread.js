//  Rest

// function average(arr) {
//   return (
//     Array.from(arguments).reduce((acc, i) => (acc += i), 0) / arguments.length
//   );
// }

// console.log(average(10, 20, 30, 40, 50));

// function average(...args) {
//   return args.reduce((acc, i) => (acc += i), 0) / args.length;
// }

// console.log(average(10, 20, 30, 40, 50));

// Spread
// const array = [1, 2, 3, 5, 8, 13];
// console.log(array);

// const array = [1, 2, 3, 5, 8, 13];
// // console.log(...array);
// console.log(Math.max(...array));
// console.log(Math.min(...array));

// const fib = [1, ...array];
// console.log(fib);

//   Destructuring

const array = [1, 2, 3, 5, 8, 13];
//1:
// const a = array[0]
// const b = array[1]
//2:
const [a, b, ...c] = array;
console.log(a, b, c);

//  Object
const address = {
  country: "Russia",
  city: "Moscow",
  street: "Lenina",
  concat: function () {
    return `${this.country}, ${this.city}, ${this.street}`;
  },
};

// const { city, contry, street = "Tverskaya", concat: addressConcat } = address;

// console.log(addressConcat.call(address));
// console.log(street);

const { city, ...rest } = address;
console.log(city);
console.log(rest);

const newAdress = { ...address, street: "Tverskaya", code: 123 };
console.log(newAdress);

// console.log(address.concat());






