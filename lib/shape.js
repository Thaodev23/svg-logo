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

module.exports = genShape;
