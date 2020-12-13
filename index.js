document.getElementById("myForm");

let para =  document.createElement("p");
let node = document.createTextNode("1. Take Out Trash");
let element = document.getElementById("list");
let addButton = document.getElementById("add-button");


addButton.addEventListener("click", () => {
para.appendChild(node);
element.appendChild(para);
alert("Button did a thing!")
});
