/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
const nam = "Manu Emmanuel";

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector("#name").innerHTML = nam;

// Step 3: declare and instantiate a variable to hold the current year
const year = new Date().getFullYear();

// Step 4: place the value of the current year variable into the HTML file
document.querySelector("#year").innerHTML = year;

// Step 5: declare and instantiate a variable to hold the name of your picture
let myPic = "images/mypic.jpg"

// Step 6: copy your image into the "images" folder
document.getElementById("image").src

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector("img").setAttribute("src", myPic)



/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
const favoriteFood = [" Beans", " Banku", " Fufuo", " Jollof"];

// Step 2: place the values of the favorite foods variable into the HTML file
document.getElementById("food").innerHTML = favoriteFood;

// Step 3: declare and instantiate a variable to hold another favorite food
const favoriteFood2 = [" Wakye", " Shito", " Emutuo", " Pizza"];

// Step 4: add the variable holding another favorite food to the favorite food array
 const allFood = favoriteFood.concat(favoriteFood2);

// Step 5: repeat Step 2
document.getElementById("food").innerHTML = allFood;

// Step 6: remove the first element in the favorite foods array
allFood.shift() // this removes the first element.

// Step 7: repeat Step 2
document.getElementById("food").innerHTML = allFood

// Step 8: remove the last element in the favorite foods array
allFood.pop(); // this removes that last element.

// Step 7: repeat Step 2
document.getElementById("food").innerHTML = allFood


