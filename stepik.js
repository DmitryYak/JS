function testComment(a, b) { 
    var x;
    x = a * b;
    
    return x;
}

//1.3
function testA(a) {         

    var x="";

    x = a;// Тут нужно написать решение

    return x;
}

//1.4
// В этом задании вам нужно вписать в указанное место код, 
// который будет присваивать переменной "х" значение суммы переменных "a" и "b".

function testSum(a, b) {
    var x;
    x = a + b// Тут нужно написать решение
    return x;
}

// В этом задании вам нужно вписать в указанное место код,
// который будет присваивать переменной "х" удвоенное значение
// остатка от деления произведения переменных "a" и "b" на их сумму.


function testOperation(a, b) {
    var x;
    x = (a * b) % (a + b) * 2// Тут нужно написать решение
    return x;
}

// 1.5 ветвления
// В этом задании вам нужно вписать в указанное место код,
// который будет присваивать переменной "х" значение суммы 
// переменных "a" и "b" в случае если  a > b или их
// произведение в остальных случаях.

function testIf(a, b) {
    var x;
    if (a > b) {
       x = a + b
    }
    else {
       x = a * b
    } // Тут нужно написать решение
    return x;
}

1.5 
// В этом задании вам нужно вписать в указанное место код, 
// который будет присваивать переменной "х" значение суммы 
// переменных "a" и "b" - в случае если  a < b, 
// разность "a" и "b" - в случае если  a > b, 
// и их произведение  в остальных случаях.

function testIf(a, b) {
    var x;
    if (a < b) {
        x = a + b
      }
    else if (a > b) {
        x = a - b
      }
    else x = a * b
        
    // Тут нужно написать решение
    return x;
}


// В этом задании вам нужно вписать в указанное место код, 
// который будет присваивать переменной "х" название цифры, 
// переданной в переменную "а". Цифра в переменную "а" будет 
// передана случайным образом и может оказаться в диапазоне
//  от 0 до 9 включительно, название должно быть написано по-русски
//   с большой буквы - "Ноль", "Один", "Два" и т.д.

function testCase(a) {
    var x;
    switch (a) {
        case 0:
            x = "Ноль"
        break;
        case 1: 
            x = "Один";
        break;
        case 2:
            x = "Два";
        break;
        case 3:
            x = "Три";
        break;
        case 4:
            x = "Четыре";
        break;
        case 5:
            x = "Пять";
        break;
        case 6:
            x = "Шесть";
        break;
        case 7:
            x = "Семь";
        break;
        case 8:
            x = "Восемь";
        break;
        case 9:
            x = "Девять";
        break;
    }
           // Тут нужно написать решение
           console.log(x)
    return x;
}
// testCase(8)


1.6 
// В этом задании вам нужно вычислить факториал для числа,
//  передаваемого в нашу функцию и вывести его с помощью команды return.
// факториал числа a это произведение всех целых чисел от 1 до a, 
// например, если а = 5, то факториал a будет равен
// 1 * 2 * 3 * 4 * 5

function testFactorial(a) {
    var x;
   x = 1;
    for(var i =1; i <=a; i++) {
        x = x * i }// Тут нужно написать решение
    return x;
}

// В этом задании вам нужно вычислить сумму всех четных чисел,
//  встречающихся в ряду от 1 до числа (включительно), 
//  передаваемого в нашу функцию (переменная "а").

function testWhile(a) {
    var x=0;
    var y=1;
    while (y <= a){
        if (y%2 === 0){
            x = x + y
        }
        y = y + 1
    }
    // Тут нужно написать решение
    return x;
}
// testWhile(3)

// 2.1 
// Дано натуральное число n. Напишите рекурсивную функцию, 
// которая возвращает строку чисел от 1 до n, разделенных пробелом.

function my_function(n) {
        if (n <= 1) return 1;
        return my_function(n-1) + " " + n;
    // Тут нужно написать решение
}
console.log('recursion', my_function(9))
// my_function(5)

function my_function2(n) {
    return n == 1 ? n.toString() : my_function2(n - 1) + ' ' + n;
 }
 console.log('recurcion_rececion_one', my_function2(9))

 var count = 1;
var result = "";
function my_function3(n) {
    if (count === n+1){
      return result;
    }
    result += count + " ";
    count += 1;
    return my_function3(n);
}
console.log('recurcion_rececion_two',my_function3(9));

function my_function4(n) {
    if (n == 1) return 1;
    else {
    return my_function4(n-1) + ' ' + n; 
    }
  }
  console.log('recurcion_rececion_three', my_function4(9))

//   В этом задании в нашу функцию testStr передаются две строки.
//   Вам нужно вернуть из функции строку, которая будет включать 
//   в себя обе этих строки, преобразовав в первой строке все буквы
//    в заглавные, а во второй - в строчные.
  
  function testStr(a, b) {
    let uperText = a.toUpperCase();
    let lowText = b.toLowerCase();
    return uperText + lowText;// Тут нужно написать решение
}

// 2.3 В этом задании в нашу функцию testStr передаются две строки. 
// Вам нужно вернуть индекс позиции, с которой начинается вхождение
//  второй строки в первую.
// Sample Input 1:
// This is a test string
// test

function testStr(a, b) {
    var theText = a;
    return theText.indexOf(b, 0)
    
    // Тут нужно написать решение
}

// В этом задании в нашу функцию testStr первым параметром передается строка (переменная str),
//  а вторым - число (переменная n) . Вам нужно вернуть из функции символ строки ,
//   порядковый номер которого указан в переданном в функцию числе.

function testStr(str, n) {
    return str.charAt(n - 1);
    }



// В этом задании в нашу функцию testStr передаются две строки.
// Вам нужно вернуть из функции строку, которая будет включать в себя обе этих строки,
// преобразовав в первой строке все буквы в заглавные, а во второй - в строчные.


function testStr(a, b) {
    let uperText = a.toUpperCase();
    let lowText = b.toLowerCase();
    return uperText + lowText;// Тут нужно написать решение
}


// В этом задании в нашу функцию testStr передаются две строки.
//  Вам нужно вернуть индекс позиции, с которой начинается вхождение второй строки в первую.

function testStr(a, b) {
    var theText = a;
    return theText.indexOf(b, 0)
    
    // Тут нужно написать решение
}

// 2.4 массивы
// В этом задании в нашу функцию testArray передаются два массива случайной длины заполненные случайными числами. 
// Вам нужно сосчитать сумму всех элементов обоих массивов и возвратить ее из функции.

let myArray14 = [0,1,5,3]
let myArray15 = [3]
let sumArray = function(a, b) {
    let x = 0;
    for (i = 0; i < a.length; i++){
    x = x + a[i]
    }
    let y = 0
    for( i = 0; i < b.length; i ++) {
    y = y + b[i]
    console.log('length' , x + y);
    return x + y
    }

}
sumArray(myArray14,myArray15)

// В этом задании в нашу функцию testArray передаются две строки случайной длины и содержания. 
// Вам нужно составить из символов этих строк один массив (каждый символ строки становится 
// отдельным элементом массива), затем добавить первым элементом  массива текстовое 
// значение "Иванов", и вернуть из функции все элементы в обратном порядке, 
// преобразовав в строку. Обратите внимание, что в обратном порядке нужно переставить 
// элементы внутри массива, а данные внутри элементов инвертировать не нужно!

function testArray(a, b) {
    var x = a;
    var y = b;
    var sum = x.concat(y);
    var newArray = sum.split("");
    newArray.unshift('Иванов');
    return newArray.reverse().join("");
    // Тут нужно написать решение
}
testArray('4326', '297515')

// В этом задании в нашу функцию testDateTime передаются две строки
// вида "03 November 2017 04:17".
// Вам нужно превратить строки в даты, сравнить их. Для той, 
// что больше получить день недели и вернуть его из функции.
// Название дня недели должно быть по-русски,
// с большой буквы, например: "Понедельник".

// 19 October 1909 10:27
// 28 March 1909 00:59

function testDateTime(a, b) {
    var myDateOne = new Date(a);
    var myDateTwo = new Date(b);
    var mainDate;
    var day;
    if (myDateOne > myDateTwo) {
        mainDate = myDateOne;
    } else {
       mainDate = myDateTwo;
    }
    day = mainDate.getDay();
    switch (day){
        case 0 :
            console.log('Воскресенье')
        break;
        case 1:
            console.log('Понедельник')
        break;
        case 2:
            console.log('Вторник')
        break;
        case 3:
            console.log('Среда')
        break;
        case 4:
            console.log('Четверг')
        break;
        case 5:
            console.log('Пятница')
        break;
        case 6:
            console.log('Суббота')
        break;

    }    
    // Тут нужно написать решение
}

testDateTime('19 October 1909 10:27', '28 March 1909 00:59')

// 2.6 В этом задании в нашу функцию передается угол в градусах. 
// Вам нужно вернуть из функции значение его синуса. Не забывайте, что тригонометрические функции
//  в JavaScript принимают аргументы только в радианах!
// Sample Input: 348

function testMath(a) {
    var si = a;
    var res = si * Math.PI / 180;
    return Math.sin(res);
    // Тут нужно написать решение
}

// 2.6 А тут вам нужно вычислить и вернуть из функции площадь треугольника.
//  Передаваемые в функцию аргументы "a" и "b" - это длины сторон,
//   а "c" - это угол между ними в градусах.
// Sample Input: 2 10 16

function testMath(a, b, c) {
    var s = c * Math.PI/180;
    var y = 1/2* a * b * Math.sin(s)
    return y 
    // Тут нужно написать решение
}

// 2.6 В этом задании в нашу функцию передаются 4 числа. 
// Вам необходимо вычислить результат деления большего из этих чисел на меньшее, 
// и округлив до ближайшего меньшего целого вернуть из функции.
// Sample Input: 1 4 8 8

function testMath(a, b, c, d) {
    var argMin = Math.min(a,b,c,d);
    var argMax = Math.max(a,b,c,d);
    var result = argMax / argMin;
    console.log(result);
    return Math.floor(result);

    // Тут нужно написать решение
}
testMath(1, 4, 8, 8)

// 3.1 В этом задании в нашу функцию передаются два параметра: целочисленная переменная ("а") и некоторая функция ("func"). 
// Вам необходимо запустить функцию "func", с переменной "а" в качестве аргумента. 
// Но вот проблема - в функции, похоже, оказалась ошибка. 
// Вам нужно возвратить имя (свойство "name") возникающей ошибки.
// Sample Input:
// 9
// Sample Output:
// EvalError

function testErrorFunc(a, func) {         
    try { func(a);
    }
        catch(x) { 
            return x.name    
        }
        return x;
    }

// 3.3 Использование регулярных выражений
//  В этом задании в нашу функцию testRegExp первым параметром передается случайная строка(переменная s),
//  а вторым - случайная подстрока(переменная sub_s),
//   которую нужно использовать в качестве шаблона регулярного выражения. 
// //   Вам нужно вернуть из функции строку, в которой будут перечислены через запятую
// //    все совпадения шаблона с первой строкой.
// Sample Input 1:
// Andsirdaarrevarariarewbutovearrmararan
// ar
// Sample Output 1:
// ar,ar,ar,ar,ar,ar,ar

    function testRegExp(s, sub_s) {
       var myRegularExpresiion =  new RegExp (sub_s,'g');
       var myReg_2 = s.match(myRegularExpresiion);
       var myArray88 = myReg_2.join()
   
       console.log(myArray88)
       

    }

    testRegExp('Andsirdaarrevarariarewbutovearrmararan', 'ar')


