let data = "";
let statusCode = undefined;
let dataReturned = false;
let result = undefined;

console.log(`Making a GET call...`);
data = "";
if (data) {
  statusCode = 200;
  dataReturned = true;
}
// Retry 5 times
let count = 1;
while (dataReturned === false && count <= 5) {
  console.log(`Retry attempt: (${count})`);
  //Make the GET call
  if (count === 3) {
    data = "JS";
    dataReturned = true;
    statusCode = 200;
    break;
  }
  count++;
}
if (statusCode !== 200 || !data) {
  console.log(`API call is failed...`);
}

//Do something with data
if (data) {
  console.log(`The typeof data is: ${typeof data}`);
  result = data + " is awesome!";
  console.log(result);
}
