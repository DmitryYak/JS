
function yolochka() {
    let text_1 = "Hi mister"
    console.log (text_1)
}
yolochka()


function yolochka() {
    let text_1 = "Hi mister"
    console.log (text_1)
}
function yolochka_1 (q1, q2){
    let result = q1 + q2
    console.log ('summ == '+ result)
}
yolochka()
yolochka_1 (5,10)

function yolochka_carpocich (...arguments) {
        let result_carpovich = 0
    for (let arg of arguments) {
        result_carpovich += arg
    }
    console.log (result_carpovich)
}
yolochka_carpocich(10,20,100)

names = ['alex', 'Inna', 'Anatoliy', 'Natalia']

function names_editor(person_name) {
    let name_1 = 'hello ' + person_name + '!'
    console.log (name_1)
}

for (let i=0; i<names.length; i++){
    names_editor(names[i])
}

let f1 = () => console.log('----')
f1()

let t1 = 10;
let t2 = 15;
let t3 = 20;

let summ = (n1, n2,) => {
    console.log(`Summ = ${n1 + n2}`)
}
summ(t1, t2)


function yolochka_pro(){}

yolochka_pro.prototype.method_1 = function(){
    console.log('method_1')
}
yolochka_pro.prototype.method_2 = function(tt1,tt2){
    console.log(`method_2 = ${tt1 + tt2}`)
}

let wood = new yolochka_pro()
let wood_2 = new yolochka_pro()

wood.method_1()
wood.method_2(10,20)

wood_2.method_2(100, 500)

 //тернарный оператор
let t4 = 20;
let f3 = (t4 > 10) ?
    (ttt1, ttt2) => console.log(ttt1 + ttt2):
    (ttt1, ttt2) => console.log(ttt1 - ttt2);
    f3(10,30)


