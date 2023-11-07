function genShape (data) {
   let shapeType = `${data.shape}`; 
    let yourShape = "";
    if (shapeType === "circle") {
     yourShape = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

     <circle cx="150" cy="100" r="80" fill="${data.shapeColor}"/>
   
     <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
   
     </svg>`

     } else if (shapeType === "triangle") {
     yourShape = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

     <polygon points="150, 18 244, 182 56, 182" fill="${data.shapeColor}"/>
   
     <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
   
     </svg>`

     } else if (shapeType === "square") {
     yourShape = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

     <rect x="150" y="100" width="300" height="200" fill="${data.shapeColor}"/>
   
     <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
   
     </svg>`

     }  return yourShape;

};

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

    setShapeColor(shapeColor) {
        this.shapeColor = shapeColor;
    }

    render () {
        `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>`
    }
}

class Triangle extends Shape {
    constructor (text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }

    setShapeColor(shapeColor) {
        this.shapeColor = shapeColor;
    }

    render () {
        `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>`
    }
}

class Square extends Shape {
    constructor (text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }

    setShapeColor(shapeColor) {
        this.shapeColor = shapeColor;
    }
    render () {
        `<rect x="150" y="100" width="300" height="200" fill="${this.shapeColor}"/>`
    }
}

module.exports = genShape;
