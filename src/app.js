// console.log('hello');

// var x = 42; // function scope,
// let x1 = 42; // block scope
// const x2 = 42; // block scope
//
//
//
// function magic(){
//     let z = 42;
//     z += 10
//     console.log(z);
// }
//
// if (true) {
//     var q = 42;
//     let q1 = 42;
//     const q2 = 42;
// }
//
// console.log(q)
// console.log(q1)
// console.log(q2)

// Hoisting - przenoszenie deklaracji na górę aktualnie przetwarzanego zasięgu

// console.log(magic)
// let magic = 42;
//
// var magic1;
// console.log(magic1);
// magic1 = 42;


// functions

// named function
function name(params) {
    // function body
    // return
}

// function - keyword
// name - opisowa nazwa, lowerCamelCase, angielski, litery, cyfry (nie może się zaczynać), underscore _, dollar, czasownik/akcja
// parameters - oddzielone przecinkiem, pozycyjne
// curly braces - function body, tworzą scope function i block
// return - zwraca wartość i przerywa funkcje
// są hoistowane


// anonymous functions

// classic
// function expression - przypisanie deklaracji fn do zmiennej
const add = function () {
    // logic
}

// arrow function
const add1 = () => {
}

// wariancje funkcji
function divide(a, b) {
    return a / b;
}

// divide(1, 2);

const divide1 = function (a, b) {
    return a / b;
}

// divide1(1, 2);


const divide2 = (a, b) => {
    return a / b;
}

// divide2(1, 2);

const divide3 = (a, b) => a / b;

const divide4 = () => 1 / 2;
const divide5 = a => a / 2;

const m = (a, b) => a <= b;

// control flow - pętle i warunki

const data = [1, 2, 3, 4];

const data2 = [];

for (let i = 0; i < data.length; i++) {
    data2.push(data[i] * 2)
}

// console.log(data2);

const data3 = [];

for (const element of data) {
    data3.push(element * 2);
}

// console.log(data3);

const data4 = []

let counter = 0;
while (data4.length < data.length) {
    data4.push(data[counter] * 2);
    counter++;
}

// console.log(data4)

const data6 = []

let counter2 = 0;

do {
    data6.push(data[counter2] * 2);
    counter++;
} while (data6.length < data.length);


const data5 = data.map((item) => item * 2);
// console.log(data5);

// if (condition){
//
// } else if (condition2){
//
// } else {
//
// }

// const value = 12;
//
// switch (value){
//     case 10:
//         //logic
//         break;
//     case 12:
//         // logic
//         break;
//     default:
//         // logic
// }


// napisz funkcje, która zwraca najwyższą wartość z tablicy

function max(arr) {
    let m = arr[0];

    for (const element of arr) {
        if (element > m) {
            m = element
        }
    }

    return m;
}


// console.log(max([1, 2, 2, 3, 4, 32, 3]))

// wylosuj 6 liczb z zakresu 1-49 bez powtórzeń

function getRandomDigits() {
    const digits = [];

    while (digits.length < 6) {
        const result = Math.round(Math.random() * 48 + 1);
        if (!digits.includes(result)) {
            digits.push(result);
        }
    }

    return digits;
}

// console.log(getRandomDigits());


// zwróc wszystkie powtarzajace się elementy z 2 tablic (czesc wspolna)

const checkDigits = (arr1, arr2) => {
    const temp = [];

    for (const element of arr1) {
        if (arr2.includes(element)) {
            temp.push(element);
        }
    }

    return temp;
}

// console.log(checkDigits([1, 2, 3, 4], [2, 5, 1, 4, 6]));

// napisz range

function range(start, stop, step=1) {
    if (stop === undefined){
        stop = start;
        start = 0;
    }

    if (step === 0){
        throw new Error(`Invalid step value ${step}`)
    }

    const temp = [];
    let counter = start;

    while (temp.length < (stop - start) / step) {
        temp.push(counter);
        counter += step;
    }

    return temp;
}


// console.log(range(3)); // [0, 1, 2]
// console.log(range(3, 6)); // [3, 4, 5]
// console.log(range(1, 4, 2)); // [1, 3]
// console.log(range(4, 1)); // []
// console.log(range(4, 1, -1)); // [4, 3, 2]


const auto = {
    name: 'ala',
    1: 'elo',
    true: 'ula',
    magic: function(){console.log('magic')},
    xd(a, b){
        return a + b
    }
}



