
let addButton = document.getElementById("add-button");
let list = document.getElementById("list");
let input = document.getElementById("input");
let numberItems = 1

function addItem() {
var para =  document.createElement("p");
para.innerText = numberItems + ". " + input.value;
numberItems += 1;
input.value = "";
para.style.color = '#' + Math.floor(Math.random()*16777215).toString(16);
para.classList.add("list-item");
list.appendChild(para);
para.addEventListener('click', ()=> {
    if(para.style.textDecoration !== "line-through"){
    para.style.textDecoration = "line-through"
} else {
    numberItems -= 1;
    if(numberItems % 2 === 0){
    para.style.animation = "fadeAway1 0.5s ease forwards 0.1s";
    setTimeout(()=> {
        para.innerText = '';
    }, 500)
} else {
    para.style.animation = "fadeAway2 0.5s ease forwards 0.1s";
    setTimeout(()=> {
        para.innerText = '';
    }, 500)
}
}
})
}

let listItem = document.querySelector("p.list");
addButton.addEventListener("click", addItem);


