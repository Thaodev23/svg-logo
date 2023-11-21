const fs = require("fs");
const inquirer = require("inquirer");
// const genShape = require("./shape");
const {Shape, Circle, Triangle, Square} = require("./shape");

const questions = [
    {
        name: "text",
        message: "Please input a text of up to 3 characters",
        type: "input"
    },
    {
        name: "textColor",
        message: "What is your text color?",
        type: "input"
    },
    {
        name: "shape",
        message: "What is your shape?",
        type: "list",
        choices: [
            "Circle",
            "Triangle",
            "Square"
        ]
    },
    {
        name: "shapeColor",
        message: "What is your shape color?",
        type: "input"
    }
];


function writeToFile(fileName, response) {
    fs.writeFile(fileName, response, (error) =>
    error ? console.error(error) : console.log("Generated logo.svg"));
}

function makeShape(response) {
    if (response.shape == "Circle") {
        const circle1 = new Circle(`${response.text}`, `${response.textColor}`, `${response.shapeColor}`)
        return circle1;
    } 
    else if (response.shape == "Triangle") {
        const triangle1 = new Triangle(`${response.text}`, `${response.textColor}`, `${response.shapeColor}`)
        return triangle1; 
    }
    else if (response.shape == "Square") {
        const square1 = new Square(`${response.text}`, `${response.textColor}`, `${response.shapeColor}`)
        return square1; 
    }

}


function genShape (shape1) {
    // let shapeType = `${shape1}`; 
     let yourShape = "";
     if (shape1 instanceof Circle) {
      yourShape = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
 
      <circle cx="150" cy="100" r="80" fill="${shape1.shapeColor}"/>
    
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${shape1.textColor}">${shape1.text}</text>
    
      </svg>`
 
      } else if (shape1 instanceof Triangle) {
      yourShape = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
 
      <polygon points="150, 18 244, 182 56, 182" fill="${shape1.shapeColor}"/>
    
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${shape1.textColor}">${shape1.text}</text>
    
      </svg>`
        
      } else if (shape1 instanceof Square) {
      yourShape = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
 
      <rect x="150" y="100" width="300" height="200" fill="${shape1.shapeColor}"/>
    
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${shape1.textColor}">${shape1.text}</text>
    
      </svg>`
 
      }  return yourShape;
 
 };

function init() {
   inquirer.prompt(questions).then(response => {
    console.log(response);
    const shape1 = new makeShape(response);
    writeToFile("logo.svg", genShape(shape1));
    })
}

init();