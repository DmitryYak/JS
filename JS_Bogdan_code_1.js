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


// function multByFactor(value, multiplier = 1) { // присвоение дефолтного параметра через =
//     console.log(value, multByFactor)
//     return value * multiplier
    
// }
// multByFactor(10, 2)


// 12 && 15...(15) в
// 12 || 15...(12) выводит первое значение true

const newPost = (post, addedAt = Date()) => ({  // () - неявный возврат объекта
    ...post,
    addedAt,
})
const firstPost = {
    id: 1,
    author: 'Dmitry'
}
newPost(firstPost)

//5:08
// 'try catch' блок - рекомендуется помещаать все блоки кода с риском ошибок..

const fnWithError = () => {
    throw new Error('Some error') // генерируется ошибка
}
try{
    fnWithError()   
} catch (error){
    console.error(error)
    console.log(error.message)
}

console.log('Continue...')

//5:32 array

const myArray = [1, 2, 3]
console.log(myArray)

const myArray2 = new Array(1, 2, 3) // 2-й вариант создания массива
console.log(myArray2)
console.log(myArray[1])

const myArray3 = [1, true, 'Dmitry']
console.log('MyArray3 has:', myArray.length, 'property')

const myArray4 = [1, true, 'a']
console.log(myArray4[0])
myArray4[3] = false
console.log(`add property in the myArray4: ${myArray4}`)

myArray4.push('Korablik') // add a new element in the end of the array 
console.log('add a new element in the end of the myArray4', myArray4) 

myArray4.pop() // delete the end element in the array
console.log(myArray4)

myArray4.unshift('Drezna')
console.log('unshift', myArray4) // 'unshift' add the new element to the beginning of the array

myArray4.shift() // delete the first element
console.log('shift', myArray4)


const myArray5 = [1, 2, 3]
console.log(myArray5)

myArray5.forEach(el => console.log('forEach', el * 2))

let myArray6 = ['Jora', 'Jaba', 'Mora', 7]
const everyCount = myArray6.forEach(el =>
console.log(el + ' Foot ' + 2 + ` or ${myArray6[2]}`))



let myArray8 = {
    city: 'Drezna',
    streets: 'Yubileinaya',
    houses: [
        1, 3, 8, 12, 14
    ],
    shops: [
        'peterochka', 'verniy', 'krasnobeloe'
    ],
}

let housesIntheCity = myArray8.houses.forEach(el => 
    console.log(`House № ${el} , city is: ${myArray8.city}, street is ${myArray8.street}`))

console.log(housesIntheCity) //method forEach givs undefined

//MAP - returned the new array!

const myArray9 = [1, 2, 3]
console.log('317: ', myArray9)

const newArray = myArray9.map(el => el * 3)

console.log(newArray) //map added the new array!
console.log(myArray9) // original array did't change!

//destructuring

const userProfile2 = {
    name2: 'Dmitry',
    commentsQty: 23,
    hasSignedAgreement: false,
}

const {name2, commentsQty} = userProfile2
const {hasSignedAgreement} = userProfile2

console.log(name2)
console.log (commentsQty) 

// destructuring arrays:

const fruits = ['apple', 'banana']
const [fruitOne, fruitTwo] = fruits
console.log(fruitOne)
console.log('343', fruitTwo)

// destructuring in the functions

const userProfile3 = {
    name3: 'Dmitry',
    commentsQty3: 23,
    hasSignedAgreement3: false,  
}
const userInfo = ({name3, commentsQty3}) => {
    if (!commentsQty3) {
        return `User ${name3} has no comments`
    }
    return `User ${name3} has ${commentsQty3} comments`
}
userInfo(userProfile3)


const instaProfile = {
    folowers: 4500,
    photos: 200,
    liks: 3345
}

const instaInfo = ({folowers, liks}) => {
    if (!liks) {
        console.log(`you don't have ${liks}`)
    }
    return console.log(`you have ${liks} likes and ${folowers} folowers`)
}
instaInfo(instaProfile)

//conditional instruction условные инструкции

if (instaProfile.folowers < 20) {
    console.log(`Your folovers less then 20, you have only ${instaProfile.folowers}`)
}
else  {
    console.log(`Your folovers ${instaProfile.folowers}`)
}

if (!instaProfile.age) {
    console.log('385', 'You dont have value about age in your profile')
}

const age2 = 16

if (age2 > 12) {
    console.log('you adult')
} else if (age2 >= 18) {
    console.log ('you are teeneger')
} else {
    console.log('you are child')
}

//instruction in the functions..

const sumPositiveNumbers = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'one of the arguments is not a number'
    }
    if (a <= 0 || b <= 0) {
        return 'numbers are not positive'
    }
    return a + b
}
sumPositiveNumbers(14,14)

//switch

const month = 2
switch (month) {
    case 12:
        console.log('December')
        break
    case 1:
        console.log('January')
        break
    case 2:
        console.log('february')
        break
    default:
        console.log('this is not month of winter')
}
//ternary operators
const value = 11
value
? console.log('it is true')
: console.log('it is false')

const value1 = 11
const value2 = 25

// value1 && value2
// ? myfunction1(value1, value2)
// : myfunction2()

let value3 = 11
console.log('441...', value3 >= 0 ? value3 : -value3)

let value4 = -5
const res = value4 >= 0 ? value4 : -value4
console.log(res)

//cicles
//for not for arrays!
const myArray10 = [true, 'abc', 2]
for (let i = myArray10[2]; i < 5; i++) {
    console.log('451 for', i)
}

const myArray11 = ['first', 'second', 'third']
myArray11.forEach((el, index) => {
    console.log('456 forEach', el, index)
})

myArray11.forEach((el, index) => {
    console.log(el, index)
})

let myArray12 = ['one', 'two', 'three', true]

myArray12.forEach((el, index) => {
    console.log(el, index)
})

//while

let i1 = 0
while (i1 < 3) {
    console.log('while', i1)
    i1++
}

//do while

let i2 = 0
do {
    console.log('do while', i2)
    i2++
} while (i2 < 5)

//for in (for objects)

const myObject = {
    x: 10,
    y: true,
    z: 'abc'
}

for (const key in myObject) {
    console.log ('for in', key, myObject[key])
}

// for of
const myString = 'Hey'
for (const letter of myString) {
    console.log (letter)
}

//convertion object in the arrays

const myObject2 = {
    x: 10,
    y: true,
    z: 'abc',
}
Object.keys(myObject2).forEach(key => {
    console.log(key, myObject2[key])
})


Object.keys(myObject2).forEach(key => {
    console.log('example', key, myObject2[key])
})

//klass

class Comment {
    constructor(text) {
        this.text = text
        this.votesQty = 0
    }

    upvote() {
        this.votesQty += 1
    }
    static mergeComments(first, second) {
        return `${first} ${second}`
    }
}

const firstComment = new Comment('First comment')

firstComment instanceof Comment // true - унаследует методы класса

firstComment.upvote()
console.log('537 class', firstComment.votesQty)
firstComment.upvote()
console.log( firstComment.votesQty)

const secondComment = new Comment('Second comment')
const thirdComment = new Comment('Third comment')

secondComment.upvote()
thirdComment.upvote()
thirdComment.upvote()
thirdComment.upvote()

console.log('549..' , firstComment.votesQty, secondComment.votesQty, thirdComment.votesQty)

console.log('550',firstComment.hasOwnProperty('text')) // проверка принадлежности свойства к экземпляру класса

Comment.mergeComments('the first text', 'the second text') 


//  расширение других классов
class NumbersArray extends Array {  // extends - расширяет другой класс Array
    sum() {
        return this.reduce((el, acc) => acc += el, 0)
    }
}
const myArray13 = new NumbersArray(2, 5, 7)
console.log(myArray13)
myArray13.sum()


//promise

fetch('https://jsonplaceholder.topicode.com/todos')
.then(response => {
    console.log(response)
    return response.json()
})
.then(json => console.log(json))
.catch(error => console.error(error))





