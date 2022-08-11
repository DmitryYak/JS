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


  var person = {
    name: 'Ivan',
    age: 25,
    hiredYear: 2017
  }

  person.sayName = function() {
    console.log('My name is '+ this.name)
  }
  person.sayName()

  person.sayAll = function() {
    for (var i in this) {
        console.log(i + ' is ' + this[i]);
    }
  }
  person.sayAll()

// 2.3 В этом задании в нашу функцию testStr передаются две строки. 
// Вам нужно вернуть из функции их суммарную длину.
  function testStr(a, b) {
    let x = a;
    let y = b;
     return x.length + y.length
    // Тут нужно написать решение
 }


// 2.3 В этом задании в нашу функцию testStr первым
// параметром передается строка (переменная str),
// а вторым - число (переменная n) .
// Вам нужно вернуть из функции символ строки ,
// порядковый номер которого указан в переданном в функцию числе.

 let cat = 'cat';
 let catFunction = function(a) {
    console.log(cat.charAt(a-1));
 }
 catFunction(2)

 function testStr(str, n) {
    return str.charAt(n - 1);
    }
    
