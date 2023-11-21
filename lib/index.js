// Author: Joey Thao
// Collaborators: Jason Yang, Sichoun Lee
// Date: 11/20/2023
// Description: generating a logo.svg through node.js. 

const fs = require("fs");
const inquirer = require("inquirer");
// const genShape = require("./shape");
const {Shape, Circle, Triangle, Square} = require("./shape");

// Below: the inquirer prompt array to create the svg.logo file. 
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

// Below: the function that is use to create the logo.svg file. 
function writeToFile(fileName, response) {
    fs.writeFile(fileName, response, (error) =>
    error ? console.error(error) : console.log("Generated logo.svg"));
}

// Below: the function that determine which shape is to be created. 
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

// Below: the fucntion that makes the shape svg file base on the object. 
function genShape (shape1) {
    // let shapeType = `${shape1}`; 
     let yourShape = "";
    //  Below: the instanceof is used to determine what shape is the object. References is in the README.file. 
     if (shape1 instanceof Circle) {
      yourShape = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
 
      <circle cx="150" cy="100" r="80" fill="${shape1.shapeColor}"/>
    
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${shape1.textColor}">${shape1.text}</text>
    
      </svg>`
      //  Below: the instanceof is used to determine what shape is the object. References is in the README.file.
      } else if (shape1 instanceof Triangle) {
      yourShape = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
 
      <polygon points="150, 18 244, 182 56, 182" fill="${shape1.shapeColor}"/>
    
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${shape1.textColor}">${shape1.text}</text>
    
      </svg>`
      //  Below: the instanceof is used to determine what shape is the object. References is in the README.file.
      } else if (shape1 instanceof Square) {
      yourShape = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
 
      <rect x="75" y="50" width="150" height="125" fill="${shape1.shapeColor}"/>
    
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${shape1.textColor}">${shape1.text}</text>
    
      </svg>`
 
      }  return yourShape;
 
 };

//  Below: fucntion that runs the whole index.js file. 
function init() {
   inquirer.prompt(questions).then(response => {
    console.log(response);
    const shape1 = new makeShape(response);
    writeToFile("logo.svg", genShape(shape1));
    })
}

init();