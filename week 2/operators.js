const x = 15;
let y = 10;
let p = 10;

const word = "this is the"
const word2 = "boy you are talking about."

let add = x + y + p;
console.log(add)

let multiply = x * y * p;
console.log(multiply)

let sub = x - p;
console.log(sub)

console.log(word +" "+ word2); /*concatenate*/

const  d = y += 3
console.log(d);

if (y === x){
  console.log("True");
}
else {
  console.log("False");
}



if (x < y){
  console.log("Yes");
}
else {
  console.log("No");
}



if (y < 10 && y > 0){
  console.log("is less")
}
else if (p === 10){ /* always use the triple equal for comparison*/
  console.log("is equal")
} 
else {
  console.log("None of the above")
}

/*manually changing the type of to get correct answer*/
//get age from input//
const age = document.getElementById("age").value;
//add ten to years//
const agePlus10 = parseInt(age) + 10;
console.log(agePlus10)


 const numSales = 1200
 
if (numSales <= 50){
  console.log("Way too few sales");
}

else if (numSales <= 1000){
  console.log("Average number of sales");
}
else{
  console.log("A good number of sales");
}


///the use of switch/

function gpaPoints(grade){
  let gpaPoints = 0;
  switch (grade){
    case "A":
      gpaPoints = 4;
  
    case "B":
      gpaPoints = 3;
      break;
  
      case "C":
      gpaPoints = 2

    default:
      gpaPoints = -1;
    }
    
    return gpaPoints;
  }

  gpaPoints("A");

