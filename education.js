"use strict";

// ---------------------------------------- Условия --------------------------------------------

if (4 == 5) {
    console.log('ok!');
} else {
    console.log('Error!');
}

// if(num < 49) {
//     console.log('error');
// } else if (num > 100) {
//     console.log('a lot');
// } else {
//     console.log('ok');
// }

// (num === 50) ? console.log('ok') : console.log('error');

let num = 50;

switch (num) {
    case 49:
        console.log('not');
        break;
    case 100:
        console.log('not');
        break;
    case 51:
        console.log('yes');
        break;
    default:
        console.log('enough');
        break;
}