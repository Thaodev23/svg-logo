// Below: shape is already declared so shape doesn't need to be input in the properties. 
class Shape {
    constructor (text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
}

// Below: object orientation. 
class Circle extends Shape {
    // Below: constructor class that creates the object. 
    constructor (text, textColor, shapeColor) { 
        super(text, textColor, shapeColor);
    }
    // Below: changes the shape color to a different color. 
    fillCircleShapeColor(shapeColor) {
        this.shapeColor = shapeColor;
    }
    // Below: creates the circle within the svg file. Part of the code that creates it but mainly renders it. 
    render () {
       return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>`
    }
}
// Below: notes are the same as the circle. 
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
// Below: notes are the same as the circle. 
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

// Below: make sure its possible for other files to use the objects. 
module.exports = {Shape, Circle, Triangle, Square};
