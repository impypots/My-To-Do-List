
let addButton = document.getElementById("add-button");
let list = document.getElementById("list");
let input = document.getElementById("input");

addButton.addEventListener("click", () => {
var para =  document.createElement("p");
//let node = document.createTextNode();
para.innerText = input.value;
//para.appendChild(node);
list.appendChild(para);
});
