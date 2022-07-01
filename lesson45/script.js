'use strict';

// // let num = new Number(3);

// function User (name, age) {
//     this.name = name;
//     this.age = age;
//     this.human = true;
//     this.hello = function () {
//         console.log(`Hello ${this.name}`);
//     };
// }

// let alex = new User('Alex', 29);

// console.log(alex);

// alex.hello();

// User.prototype.exit = function () {
//     console.log(`Пользователь ${this.name} вышел`);
// };

// alex.exit();





// this




// function showThis (a, b) {
//     console.log(this);
//     function sum(){
//         console.log(this);
//         return a + b;
//     }

//     console.log(sum());
// }
// showThis(4, 5);

// let obj = {
//     a: 20,
//     b: 10,
//     c: 23,
//     sum: function () {
//         console.log(this);
//         function shout () {
//             console.log(this);
//         }
//         shout();
//     }
// };
// obj.sum();

// function User (name, age) {
//     this.name = name;
//     this.age = age;
//     this.human = true;
//     this.hello = function () {
//         console.log(`hello ${this.name}`);
//     }
// }
// let ivan = new User ('Ivan', 28);

// console.log(ivan);


// function sayName (surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// let user = {
//     name: 'Alex'
// };

// sayName.call(user, ' Smith');
// sayName.apply(user, [' Smith']);

// function count (num) {
//     return this * num;
// }
// let double = count.bind(34);
// console.log(double(3));
// console.log(double(13));
// console.log(double(32));

// 1) Обычная функция this будет равна Window, но если стоит use strict, то будет undefined;
// 2) Контекст у методов объекта это будет сам объект
// 3) this в конструкторах и классах - это новый экземпляр объекта
// 4)  Ручная привязка this: call, apply, bind

