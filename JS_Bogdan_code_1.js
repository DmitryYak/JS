// object..
let object_1 = {
    visible: true,
    colorDepth: 24,
    title: 'My Image',
    orientations: {
        angle: 0,
        type: 'landscape',
    },
    piselDepth: 24,
    width: 1440,
}

console.log(object_1.orientations.angle)
cocatonanions = 'good' + ' evening'
console.log (cocatonanions)

const objectA = {
    a: 10,
    b: true
}
const copyOfa = objectA
copyOfa.a = 20 // change main object
console.log('chnge object in the copy: ',  objectA)
copyOfa.c = 'abc' // add the new value in the object
console.log('added new value in the object: ' , objectA)
let a = String = 'abc'
console.log ('type:', a)

function aa() {
    console.log ('hey there_1')
}
aa()
aa = 4 // change value of function and aa is not function now

const aaa = () => {
    console.log('hey there_2')
}
aaa()
//Object:
const myCity = {
    city: 'New York',
    popular: true,
    country: 'USA'
}
myCity.city = 'Drezna' // value is change!
console.log('object is changed:', myCity.city)
myCity.newProperty = 'new property(свойство)'
console.log('added new property:', myCity)

delete myCity.popular // delete one of property in the object!
console.log('delete property "Popular": ', myCity)

myCity['river'] = 'drezenka' // add property this [] way'
console.log('add property this [] way', myCity)

const countryPropertyName = 'country'
myCity [countryPropertyName] = 'USA.New'//change property "country"
console.log(myCity)

const name = 'Bogdan'
const postsQty = 23
const userProfile = {
name: name,
postsQty: postsQty, // create new object with variable
hasSignedAgreement: false
}
console.log(userProfile)

const myCity2 = {
    city: 'New York',
    cityGreeting: function() {   //function in the property
        console.log('greetings!!')
    }
}
myCity2.cityGreeting()
//var 2
const myCity3 = {
    city: 'New York',
    cityGreeting () {   //function in the property (short without word 'function')
        console.log('greetings_2!!')
    }
}
myCity3.cityGreeting()

//JSON
jsonFormat = {
  "userId": 1,
  "id": 1,
  "title": "Test title",
  "status": {
    "completed": false
  }
}

const myParsObject = {"userId":1,"title":"TestTitle","status":{"completed":false}}
// JSON.parse() спарсить!
// JSON.stringify() распарсить!

const post = {
    title: 'my post',
    likesQty: 5
}
JSON.stringify(post)
console.log(post)
const poststringified = JSON.stringify(post)
JSON.parse(poststringified)
console.log(post)

const person = {
    name: 'bob',
    age: 21
}
person.age = 22
person.isAbult = true
console.log(person.age)
console.log(person.isAbult)

const person2 = {
    name: 'bob',
    age: 25
}
const person3 = Object.assign({}, person2) //как избежать мутаций объектов
person3.age = 26
console.log(person3.age)
console.log(person.age)

//function
let a1 = 5
let b1 = 3
function sum(a1, b1) {
    const c = a1 + b1
    console.log('result of function: ', c)
}
sum(a1, b1)
a1 = 8
b1 = 12
sum(a1, b1)

function myFn(a, b) {
    let c
    a = a + 1
    c = a + b
    console.log('function myFn:', c)
    return c
}
myFn(2, 3)

const personOne = {
    name: 'Bob',
    age: 21
}
function increasPersonAge (person) {  //in the function no{t recomended use changeble object
    person.age += 1
    return person
}

increasPersonAge(personOne)
console.log('person age', personOne.age)

const personOne2 = {
name: 'bob',
age: 21
}
function increasPersonAge2 (person) {
    const updatedPeson = Object.assign({}, person)
    updatedPeson.age += 1
    return updatedPeson
}
const updatedPesonOne = increasPersonAge2 (personOne2)
console.log (personOne2.age)
console.log (updatedPesonOne.age)


function printMyName() {
    console.log('setTimeout 1000: ', 'DimaYak') //callback function
}
//setTimeout(printMyName, 1000)

const button = {
    width: 200,
    text: 'buy'
}

const redButton = {
    ...button,    //!!!! 
    color: 'red'  //add new property
}
console.table(redButton)

let myCity4 = 'Drezna'
let myName = "Dmitry"
console.log(`'My name is ${myName} and i am from ${myCity4}`) //шаблонные строки / template strings

let gira = function(a, b) {  //функциональное выражение /functional expression - no name function
    let c 
    c = a + b
    console.log(c)
    return c
}
gira(4,6)

setTimeout(function(){      //functional expression
    console.log('new message')
}, 1000)

// const myFunction = (a, b) => {
//     let = ccc
//     a = a + 1
//     ccc = a + b
//     return ccc
// }
// myFunction(5, 3)

// setTimeout(() => {
//     console.log('message')
// }, 1000)








