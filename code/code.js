
let button = document.querySelector("button");
button.addEventListener("click", function() {
    console.log("diametr");
  } )
  
    
const count = 100;
for(let i=0; i<count; i++){
  const newDiv = document.createElement("div");
  newDiv.classList.add("rect");
  newDiv.style.backgroundColor = `rgb(${randomColor(255)}, ${randomColor(255)}, ${randomColor(255)})`;
  document.getElementsById("root").append(newDiv);
}

function randomColor (n) {
  return Math.floor(Math.random() * n + 1);
}