const {Shape, Circle, Triangle, Square} = require("./shape");

// Below: test to make sure the object and shape color is rendering properly. 
describe("Shape Colors", () => { // this describes the shape parent. 
    describe("Circle Color", () => {
        test("the line of code that creates the circle is equal to the object circle render method", () => {
            const circle1 = new Circle ("THA", "Blue", "Green");
            circle1.fillCircleShapeColor("Red");
            expect(circle1.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="${circle1.shapeColor}"/>`);
        })
    })
    // Below: test to render the triangle shape color, etc...
    describe("Triangle Color", () => {
        test("the line of code that creates the triangle is equal to the object triangle render method", () => {
            const triangle1 = new Triangle ("LOA", "Yellow", "Brown");
            triangle1.fillTriangleShapeColor("Purple");
            expect(triangle1.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="${triangle1.shapeColor}"/>`);
        })
    })
     // Below: test to render the square shape color, etc...
    describe("Square Color", () => {
        test("the line of code that creates the square is equal to the object square render method", () => {
            const square1 = new Square ("KMW", "Pink", "Black");
            square1.fillSquareShapeColor("Blue");
            expect(square1.render()).toEqual(`<rect x="150" y="100" width="300" height="200" fill="${square1.shapeColor}"/>`);
        })
    })
})