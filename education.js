// // // "use strict";

// // // // ---------------------------------------- Условия --------------------------------------------

// // // // if (4 == 5) {
// // // //     console.log('ok!');
// // // // } else {
// // // //     console.log('Error!');
// // // // }

// // // // // if(num < 49) {
// // // // //     console.log('error');
// // // // // } else if (num > 100) {
// // // // //     console.log('a lot');
// // // // // } else {
// // // // //     console.log('ok');
// // // // // }

// // // // // (num === 50) ? console.log('ok') : console.log('error');

// // // // let num = 50;

// // // // switch (num) {
// // // //     case 49:
// // // //         console.log('not');
// // // //         break;
// // // //     case 100:
// // // //         console.log('not');
// // // //         break;
// // // //     case 51:
// // // //         console.log('yes');
// // // //         break;
// // // //     default:
// // // //         console.log('enough');
// // // //         break;
// // // // }

// // // // ---------------------------------------- Циклы --------------------------------------------

// // // // let num = 50;

// // // // // while (num <= 55) {
// // // // //     console.log(num);
// // // // //     num++;
// // // // // }

// // // // // do {
// // // // //     console.log(num);
// // // // //     num++;
// // // // // }
// // // // // while (num <=55);

// // // // for (let i = 0; i <= 10; i++) {
// // // //     if (i % 2) {
// // // //         // break;
// // // //         continue;
// // // //     } else {
// // // //         // continue;
// // // //     }
// // // //     console.log(i);
// // // // }

// // // // ---------------------------------------- Функции --------------------------------------------

// // // // let num = 20;

// // // // function showFirstMessege (text) {
// // // //     console.log(text);
// // // //     let num = 10;
// // // //     console.log(++num);
// // // // }
// // // // showFirstMessege('hello');
// // // // console.log(num);

// // // // function calc (a, b) {
// // // //     return (a * b);
// // // // }
// // // // console.log(calc(10, 5));

// // // // function ret () {
// // // //     let num = 50;
// // // //     return num;
// // // // }
// // // // let anotherNum = ret();
// // // // console.log(anotherNum);

// // // // let logger = function () {
// // // //     console.log('hello');
// // // // };
// // // // logger();

// // // // let calc = (a, b) => a + b;

// // // // ---------------------------------- Методы и св-ва строк и чисел -----------------------------------

// // // // let str = 'test';
// // // // let arr = [1,2,4,5,9];
// // // // // console.log(str[2]);
// // // // // console.log(str.toUpperCase());
// // // // const fruit = 'someo fruit';

// // // // console.log(fruit.indexOf('o'));

// // // // const logg = 'hello world!';

// // // // console.log(logg.slice(-4, -1));
// // // // console.log(logg.substring(6, 12));
// // // // console.log(logg.substr(6, 6));

// // // // const num = 12.5;
// // // // const test = '12.2px';

// // // // // console.log(Math.round(num));
// // // // console.log(parseInt(test));
// // // // console.log(parseFloat(test));

// // // // ------------------------------------------ Callback функция ----------------------------------------
// // // // function learnJS(lang, callback) {
// // // //     console.log(`я учу : ${lang}`);
// // // //     callback();
// // // // }

// // // // function done(){
// // // //     console.log('123')
// // // // }

// // // // learnJS('bgrbrb', done);
// // // // learnJS('javascript', function(){
// // // //     console.log('я прошел этот урок');
// // // // });

// // // // ---------------------------------- Объекты, деструктуризация объектов ------------------------------
// // // // const options = {
// // // //     name: "test",
// // // //     width: 1024,
// // // //     height: 1024,
// // // //     colors: {
// // // //         border: 'black',
// // // //         background: 'red'
// // // //     },
// // // //     makeTest: function () {
// // // //         console.log('test');
// // // //     }
// // // // };
// // // // // options.makeTest();
// // // // // console.log(Object.keys(options).length);

// // // // const {border, background} = options.colors;
// // // // console.log(background);

// // // // console.log(options['colors']['border']);

// // // // console.log(options.name);

// // // // delete options.name;

// // // // console.log(options);

// // // // let counter = 0;
// // // // for (let key in options) {
// // // //     if (typeof(options[key]) === 'object'){
// // // //         for (let i in options[key]) {
// // // //             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
// // // //             counter++;
// // // //         }
// // // //     } else {
// // // //         console.log(`Свойство ${key} имеет значение ${options[key]}`);
// // // //         counter++;
// // // //     }
// // // // }

// // // // console.log(counter);

// // // // for (let key in options) {
// // // //     counter++;
// // // // }
// // // // console.log(counter);

// // // // ---------------------------------- Массивы и псевдомассивы ------------------------------

// // // // const arr = [1,21,322,63,81];
// // // // arr.sort(compareNum);
// // // // console.log(arr);

// // // // function compareNum (a, b) {
// // // //     return a -b;
// // // // }

// // // // arr.forEach(function (item, i, arr){
// // // //     console.log(`${i}: ${item} внутри массива ${arr}`);
// // // // });
// // // // console.log(arr.length);

// // // // arr[99] = 0;
// // // // console.log(arr);

// // // // arr.pop();
// // // // arr.push('test');

// // // // console.log(arr);

// // // // for (let i = 0; i < arr.length; i++) {
// // // //     console.log(arr[i]);
// // // // }

// // // // for (let key of arr) {
// // // //     console.log(key);
// // // // }

// // // // const str = prompt('', '');
// // // // const products = str.split(', ');
// // // // products.sort();
// // // // console.log(products.join('-'));

// // // // -------------------------------- Передача по ссылке или по значению-----------------------------

// // // // let a = 5,
// // // //     b = a;

// // // // b += 5;

// // // // console.log(b);
// // // // console.log(a);

// // // // const obj = {
// // // //     a: 5,
// // // //     b: 1
// // // // };

// // // // const copy = obj; // Ссылка на уже существующий объект

// // // // copy.a = 10;

// // // // console.log(copy);
// // // // console.log(obj);

// // // function copy (mainObj) {
// // //     let objCopy = {};
// // //     let key;
// // //     for (key in mainObj){
// // //         objCopy[key] = mainObj[key];
// // //     }
// // //     return objCopy;
// // // }

// // // const numbers = {
// // //     a: 2,
// // //     b: 5,
// // //     c: {
// // //         x: 7,
// // //         y: 4
// // //     }
// // // };

// // // const newNumbers = copy(numbers);

// // // newNumbers.a = 10;
// // // newNumbers.c.x = 10;
// // // console.log(newNumbers);
// // // console.log(numbers);

// // // const add = {
// // //     d: 17,
// // //     e: 20
// // // };

// // // const clone = Object.assign({}, add);
// // // clone.d = 20;
// // // // console.log(add);
// // // // console.log(clone);

// // // const oldArr = ['a', 'b', 'c'];
// // // const newArr = oldArr.slice();

// // // newArr[1] = 'adsdadsad';
// // // console.log(newArr);
// // // console.log(oldArr);

// // const video = ['youtube', 'vimeo', 'rutube'];
// // const blogs = ['wordpress', 'livejournal', 'blogger'];
// // const internet = [...video, ...blogs, 'vk', 'facebook'];
// // console.log(internet);

// function log (a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 7,9];

// log(...num);

const array = ['a', 'b', 'c'];

const newArr = [...array];

const q = {
    one: 1,
    two: 2,
    three: 3 
};

const newObj = {...q};
console.log(newObj);