const fs = require("fs");
const inquirer = require("inquirer");
const genShape = require("./shape");

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
            "circle",
            "triangle",
            "square"
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

function init() {
   inquirer.prompt(questions).then(response => {
    console.log(response);
    writeToFile("logo.svg", genShape(response));
    })
}

init();