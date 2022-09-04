//document.getElementById("count-el").innerText = 5

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0
function increment(){
    count = count+1
    countEl.innerText = count
}

function save(){
    let countpvr = count + " - " 
     saveEl.textContent += countpvr
     countEl.textContent = 0
     count = 0
     console.log("counting people in subway")
}

let welcomeEl = document.getElementById("welcom-el")
let person = "People "
let greeting = "Welcome"
welcomeEl.innerText = "hello" + " "+name + " " + greeting 
welcomeEl.innerText += "👋"

// let name = "Pratham"
// let calling = "Hi there"
// function called(){
//    console.log(calling + " " +name)
// }