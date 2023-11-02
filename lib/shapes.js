class Shape {
    constructor(color, text, textColor){
        this.color = color
        this.text = text
        this.textColor = textColor
    }
};

class Circle extends Shape{
    constructor(color, text, textColor){
        super(color, text, textColor);
    };
    render(){
        return`<svg width="300" height="200">
        <circle cx="150" cy="100" r="100" fill="${this.color}" />
        <text x="50%" y="50%" text-anchor="middle" fill="${this.textColor}" font-size="100px" dy=".3em">${this.text}</text>
    </svg>`
    };
};

class Square extends Shape{
    constructor(color, text, textColor){
        super(color, text, textColor);
    };
    render(){
        return`<svg width="300" height="200">
        <rect width="200" height="200" fill="${this.color}" />
        <text x="33%" y="66%" text-anchor="middle" fill="${this.textColor}" font-size="100px" dy=".3em">${this.text}</text>
      </svg>`
    };
};

class Triangle extends Shape{
    constructor(color, text, textColor){
        super(color, text, textColor);
    };
    render(){
        return`<svg height="300" width="200">
        <polygon points="100,10 25,290 175,290" fill="${this.color}" />
        <text x="50%" y="70%" text-anchor="middle" fill="${this.textColor}" font-size="100px" dy=".3em">${this.text}</text>
      </svg>`
    };
};

module.exports = {Circle, Square, Triangle};