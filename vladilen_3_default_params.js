const defaulB = 30;
const getDefault = (c) => c * 2;

function compute(a = 10, b = getDefault(10)) {
  return a + b;
}

console.log(compute());
