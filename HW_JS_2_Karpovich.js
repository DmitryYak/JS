
const arr = [
    {name: 'Vadim'},
    {name: 'Viktoria'},
    {name: 'Anatoly'}
]

let vika = arr.find(el => el.name == 'Viktoria')
console.log(vika)

vika['name'] = 'Lena'

console.log (arr)
//#1
//var 1
for (let i =1; i < 11; i++) {
    console.log (2**i)
}

//var 2
for (let i =1; i < 11; i++) {
    console.log (Math.pow(2,i))
}

//var 3
const pow = function(counter) {
    for (let i =1; i <=counter; i++) {
        console.log (2**i)
    }
}
pow(10)

//#2
//var 1
let result = ''
let smile_4 = ':)'
for (let i = 1; i<6; i++){
    console.log(result += smile_4)
}

//var 2
for (let i = 1; i<6; i++){
    console.log(smile_4.repeat(i))
}

//var 3
function smilik(str, numberOfRows) {
    for(let i = 1; i<=numberOfRows; i++){
        result = result + str
        console.log(result)
    }
}
smilik(':(', 10)

//#3
function getWordStructure (word) {
    const vowels = 'aeiouy'.split('')
    //split() - создание и разбиение в массив по каждой букве
    const consonants = 'bcdfghjklmnprstvwxz'.split('')

    let vowelsCount = 0;
    let consonantsCount = 0;

    for (const char of word.toLowerCase()) {
        //toLowerCase() - приведение к нижнему регистру
        if (vowels.includes(char)) vowelsCount++
        else if (consonants.includes(char)) consonantsCount++
    }
    console.log (`В слове ${word} : ${vowelsCount} гласных и ${consonantsCount} согласных букв`)
}
getWordStructure ('Hello')

//4
function isPalindrom(word) {
    word = word.toLowerCase() // приведение к нижнему регистру
    for(let i=0, j= word.length - 1; i<word.length, j>=0; i++,j--) {
        if (word[i] !== word[j]) {
            return false
        }
    }
    return true
}
console.log(isPalindrom('abba'))