'use strict';

const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const oneHeart = document.querySelector('.heart');
const hearts = document.querySelectorAll('.heart');
const wrapper = document.querySelector('.wrapper');
console.log(wrapper);
box.style.backgroundColor = 'blue';
box.style.width =  700 + 'px';

box.style.cssText = 'background-color: black; width: 100px';

btns[1].style.borderRadius = '100%';

// circles.style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.display = 'none';
// }
// console.log(hearts);
hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
// const text = document.createTextNode('тут был я');

div.classList.add('black');

// wrapper.append(div);

wrapper.appendChild(div);
// wrapper.prepend(div);
// hearts[0].before(div);
// hearts[0].after(div);


// circles[0].remove();

// hearts[0].replaceWith(div);

div.innerHTML = '<h1>Hello world!</h1>';

div.insertAdjacentHTML("afterend", '<h2>hello</h2>');
div.style.color = 'black';