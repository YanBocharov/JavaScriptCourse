"use strict";

// ---------------------------------------- Условия --------------------------------------------

// if (4 == 5) {
//     console.log('ok!');
// } else {
//     console.log('Error!');
// }

// // if(num < 49) {
// //     console.log('error');
// // } else if (num > 100) {
// //     console.log('a lot');
// // } else {
// //     console.log('ok');
// // }

// // (num === 50) ? console.log('ok') : console.log('error');

// let num = 50;

// switch (num) {
//     case 49:
//         console.log('not');
//         break;
//     case 100:
//         console.log('not');
//         break;
//     case 51:
//         console.log('yes');
//         break;
//     default:
//         console.log('enough');
//         break;
// }

// ---------------------------------------- Циклы --------------------------------------------

// let num = 50;

// // while (num <= 55) {
// //     console.log(num);
// //     num++;
// // }

// // do {
// //     console.log(num);
// //     num++;
// // }
// // while (num <=55);

// for (let i = 0; i <= 10; i++) {
//     if (i % 2) {
//         // break;
//         continue;
//     } else {
//         // continue;
//     }
//     console.log(i);
// }

// ---------------------------------------- Функции --------------------------------------------

// let num = 20;

// function showFirstMessege (text) {
//     console.log(text);
//     let num = 10;
//     console.log(++num);
// }
// showFirstMessege('hello');
// console.log(num);

// function calc (a, b) {
//     return (a * b);
// }
// console.log(calc(10, 5));

// function ret () {
//     let num = 50;
//     return num;
// }
// let anotherNum = ret();
// console.log(anotherNum);

// let logger = function () {
//     console.log('hello');
// };
// logger();

// let calc = (a, b) => a + b;

// ---------------------------------- Методы и св-ва строк и чисел -----------------------------------

// let str = 'test';
// let arr = [1,2,4,5,9];
// // console.log(str[2]);
// // console.log(str.toUpperCase());
// const fruit = 'someo fruit';

// console.log(fruit.indexOf('o'));

// const logg = 'hello world!';

// console.log(logg.slice(-4, -1));
// console.log(logg.substring(6, 12));
// console.log(logg.substr(6, 6));

// const num = 12.5;
// const test = '12.2px';

// // console.log(Math.round(num));
// console.log(parseInt(test));
// console.log(parseFloat(test));

// ---------------------------------- Callback функция -----------------------------------
function learnJS(lang, callback) {
    console.log(`я учу : ${lang}`);
    callback();
}

function done(){
    console.log('123')
}

learnJS('bgrbrb', done);
// learnJS('javascript', function(){
//     console.log('я прошел этот урок');
// });

// ----------------------------------  -----------------------------------
