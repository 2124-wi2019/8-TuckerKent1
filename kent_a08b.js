/*
    Tucker Kent
    kent_a08b.js
    19WI_INFO_2124_WW Online Javascript I
    Thoendel
    8 Feb 2020
*/

/* WRITE YOUR SOLUTION BETWEEN THIS LINE */

const MathUtility = { //declaring MathUtility object
    getAreaOfCircle : function(radius) { //declaring function accepting radius as parameter
        let area = Math.PI * (Math.pow(radius, 2)); //declaring and initializing area variable to formula using parameter and Math objects
        return area; //returning area variable
    }, //method separated by comma inside object

    getAreaOfSquare : function(side) { //declaring function with one parameter - side. 
        let area = Math.pow(side, 2); //declaring and initializing variable area to formula using parameter and math object
        return area; // returning area variable
    }, // method separated by comma

    getAreaOfTriangle : function(base, height) { //declaring function that accepts two arguments - base and height
        let area = (base * height) / 2; //declaring area variable and setting it to formula
        return area; // returning area variable
    } //no comma because it is the last method
}; // end object declaration

/* AND THIS LINE */

//Test code
const outMsg = 
`
The area of a circle that is has a radius of 5 units is ${MathUtility.getAreaOfCircle(5)} units.
The area of a square whose side measures 13 units is ${MathUtility.getAreaOfSquare(13)} units.
The area of a triangle with a base of 3 units and height of 2 units is ${MathUtility.getAreaOfTriangle(3, 2)} units.

`
console.log(outMsg);