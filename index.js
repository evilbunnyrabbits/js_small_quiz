const buttons = document.getElementById('button')

buttons.addEventListener("click", function(e){
   // console.log(e.target)
})


let secondListItem = document.getElementsByClassName('list')[0]

let testLi = secondListItem.querySelectorAll('li')[1]
const parentDiv = secondListItem.parentElement
const pItem = parentDiv.querySelector('p')

console.log(pItem)

/*
fetch("http://notarealwebsite.com") {
    .then(response => response.json())


})
*/