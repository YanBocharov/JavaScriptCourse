'use strict';

class Rectangle {
    constructor (height, width) {
        this.height = height;
        this.width = width;
    }

    caclArea() {
        return this.height * this.width;
    }
}

class ColoredRectangleWithText extends Rectangle {
    constructor (height, width, text, bgColor) {
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps () {
        console.log(`text: ${this.text}, color: ${this.bgColor}`);
    }
}

let div = new ColoredRectangleWithText(25, 10, 'ttt', 'red');

div.showMyProps();
console.log(div.caclArea());

// let square = new Rectangle(2, 5),
//     long = new Rectangle(20, 100);

// console.log(square.caclArea());
// console.log(long.caclArea());
