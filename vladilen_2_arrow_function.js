// function sum(a, b) {
//   return a + b;
// }

// function cube(a) {
//   return a ** 3;
// }

// const sum = (a, b) => {
// return a + b
// }

// const cube = (a) => {
//     return a ** 3
// }
// console.log(sum(a:41, b:1))
// console.log(cube(a:2))

//var 1
// setTimeout(function () {
//   console.log("after 1 second");
// }, 1000);

//var 2
// setTimeout(() => console.log("after 1 second"), 1000);

//   Context
function log() {
  console.log(this);
}

const arrowLog = () => console.log(this);

const person = {
  name: "Elena",
  age: 20,
  log: log,
  arrowLog: arrowLog,
  delayLog: function () {
    setTimeout(function () {
      console.log(this.name + " " + this.age);
    }, 500);
  },
};

// person.log();
person.delayLog();





  
