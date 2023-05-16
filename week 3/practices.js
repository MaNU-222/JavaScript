//array//
const fruits = ["Banana","berry"];

//add to the to array//
const newLenth = fruits.push("orange","mango","water melon"); 

console.log(newLenth)//this print the number of items in the console//
console.log(fruits) //this print all the items including the added ones//

/* Remove the last item*/
//const removeItem = fruits.pop(); // the pop() removed the lat item
//console.log(removeItem) //this prints the removed items
//console.log(fruits) // this prints the items thats left in the array

/*Remove multiple last items from the array with splice()*/
//const start = -3; // this is the number of items thats going to be removed starting from the last
//const removeItem = fruits.splice(start); //this removed three items
//console.log(fruits);


/*Remove the first item*/
//const removeItem = fruits.shift();
//console.log(fruits);

/*Remove multiple first items from the array with splice()*/
//const start = 0; // starting from first item
//const deleteCount = 3; //delete 3 items from the array
//const removeItem = fruits.splice(start, deleteCount);
//console.log(fruits);

/*Add a new first item to the array*/
//const newLenth2 = fruits.unshift("strawberry");
//console.log(fruits);
















