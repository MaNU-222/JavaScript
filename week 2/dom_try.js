
//adding paragraph to browser//
const newParagraph = document.createElement("p");
newParagraph.innerText = "added with javascript!"
document.body.appendChild(newParagraph);


//using Js to add image to browaer//
const newImage = document.createElement("img");
newImage.setAttribute("src", "https://placeimg.com/200/200/animals");
newImage.setAttribute("alt", "Description of image");
document.body.appendChild(newImage)

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>ONE</li>TWO<li><li>THREE</li</ul>"
document.body.appendChild(newDiv)

const sect = document.createElement("section");
sect.innerHTML = "<h2>MEO</h2><p>Welcome to....</p>"
document.body.appendChild(sect);
