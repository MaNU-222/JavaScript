const setps = ["one", "two","three"];
const stepHtml =setps.map(function (setps){
  return `<li>${setps}</li>`
});

document.getElementById("myList").innerHTML = stepHtml.join();







const grades = ["A","B","C"];
function convertGradeToPoints (grade) {
  let points = 0;
  if (grade === "A") {
    points = 4;
  } 
  else if (grade === "B") {
    points = 3;
  }

  return points;
}

const gpaPoints = grades.map(convertGradeToPoints);







