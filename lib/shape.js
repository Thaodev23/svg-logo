// Below: shape is already declared so shape doesn't need to be input in the properties. 
class Shape {
    constructor (text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
}

class Circle extends Shape {
    constructor (text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }

    fillCircleShapeColor(shapeColor) {
        this.shapeColor = shapeColor;
    }

    render () {
       return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>`
    }
}

class Triangle extends Shape {
    constructor (text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }

    fillTriangleShapeColor(shapeColor) {
        this.shapeColor = shapeColor;
    }

    render () {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>`
    }
}

class Square extends Shape {
    constructor (text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }

    fillSquareShapeColor(shapeColor) {
        this.shapeColor = shapeColor;
    }
    render () {
        return `<rect x="150" y="100" width="300" height="200" fill="${this.shapeColor}"/>`
    }
}

module.exports = {Shape, Circle, Triangle, Square};
