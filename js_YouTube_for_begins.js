//1. variables
let age = 18;
let age2 = age + 11;
console.log(age2);

//2. data types
let myName = "Dmitry";
// \n - line translation(перевод строки)
// \' - quotation mark (кавычка)
// //' - double quote (двойная кавычка)
// boulean: true and false
// undefined, null, object, string
//object:
let monitor = {
  name: "loc",
  weight: 3.3,
  resolution: 27,
  price: 1000,
  totate: false,
};
// 3. array
let arr = ["PTN PNH", "Parashenka", "Bashmachek", "Duble"];
console.log(arr[2]);

let arr2 = [
  ["PTN PNH", "Parashenka", "Bashmachek", "Duble"],
  ["Riga", "Moscow", "Nizniy", "Likino"],
];
console.log(arr2[1][1]);
// 4. operators +, -, *, /, **, %
// ++arr - +1, --arr - -1
a = 5;
a = a + 5; // the same a =+5
// 5. if
let aa = 0;
let liked = true;
if (liked) aa = 5;
console.log(typeof aa, aa);

let cash = 500;
let buying;
if (cash >= 300) {
  buying = "car";
} else buying = "pie";
console.log(buying, "if else");

// false: 0, '', Nan, undefinded
// ! the same ===
f = 100;
if (f > 500000) f = f - 500000;
else f = f - 50;

let j = 13000;
if (j >= 500000) {
  j = j - 500000;
  console.log("j =" + j);
} else if (j >= 100000) {
  j = j - 10000;
  console.log("j =" + j);
} else if (j >= 12000) {
  j = j - 12000;
  console.log("j =" + j);
} else {
  j = j - 50;
  console.log("j =" + j);
}
// 6. switch
let centmeters = 15;
switch (centmeters) {
  case 5:
    console.log("small");
    break;
  case 15:
    console.log("medium");
    break;
  case 20:
    console.log("huge");
    break;
}

let my_pen_is = "huge";
switch (my_pen_is) {
  case my_pen_is === "small":
    console.log("don't worry, be happy");
    break;
  case my_pen_is === "medium":
  case "large":
    console.log("lucky");
    break;
  case "giant":
  case "huge":
    console.log("success sttory");
    break;
  default:
    console.log("unknown size");
    break;
}

// 7. (условие ?(if) результат1 :(else) результат2 )
// 8. for
for (let counter = 1; counter <= 5; counter = counter + 1) {
  console.log("stand up");
  console.log("sit down");
}
Gopota = 0;
for (let gop = 1; gop <= 5; gop = gop + 1) {
  console.log("hello" + " №" + gop);
}

for (let counter2 = 1; counter2 <= 5; counter2 = counter2 + 2) {
  console.log("stand up" + counter2);
  console.log("sit down" + counter2);
}

names = ["Borya", "Vitya", "Shurik"];
money = [1000, 2000, 5000];
for (let counter3 = 0; counter3 < 3; counter3 = counter3 + 1) {
  console.log(counter3);
}
Gopnik = 0;
for (let counter4 = 0; counter4 < 3; counter4 = counter4 + 1) {
  console.log(
    names[counter4] + " amaizing, that Gopnik took away " + money[counter4]
  );
  Gopnik = Gopnik + money[counter4];
  money[counter4] = 0;
}

