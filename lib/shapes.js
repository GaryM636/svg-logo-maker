class Shape {
    constructor(color, text, textColor){
        this.color = color
        this.text = text
        this.textColor = textColor
    }
};

class Circle extends Shape{
    constructor(color, text, textColor){
        <svg height="100" width="100">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
</svg>
    };
};

class Square extends Shape{
    constructor(color, text, textColor){

    };
};

class Triangle extends Shape{
    constructor(color, text, textColor){

    };
};

module.exports = {Circle, Square, Triangle};