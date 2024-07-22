// Activity 1: Selecting and Manipulating Elements
//- Task 1: Select an HTML element by its ID and change its text content.
let text = document.getElementById("text")
text.textContent = "This is new text"

//- Task 2: Select an HTML element by its class and change its background color.
let background = document.querySelector(".background")
background.style.backgroundColor="lightblue"

//Activity 2: Creating and Appending Elements
//- Task 3: Create a new div element with some text content and append it to the body.
let body = document.querySelector("body")
let div = document.createElement("div")
div.innerText="Div element text"
body.append(div)

//- Task 4: Create a new li element and add it to an existing ul list.
let ul=document.querySelector("ul")
let newLi=document.createElement("li")
newLi.innerText="Thor"
ul.append(newLi)

// Activity 3: Removing Elements
//- Task 5: Select an HTML element and remove it from the DOM.
let rem=document.getElementById("remove")
rem.remove()

//- Task 6: Remove the last child of a specific HTML element.
let parent=document.querySelector(".parent")
parent.lastElementChild.remove()

//- Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).
let link=document.querySelector(".link")
link.setAttribute("href","https://www.google.co.in/")

//- Task 8: Add and remove a CSS class to/from an HTML element.
text.classList.add("alt")
text.classList.remove("alt")

//- Task 9: Add a click event listener to a button that changes the text content of a paragraph.
let para=document.querySelector(".click")
let change=function(){
    para.innerHTML="BUTTON CLICKED"
}

//Task 10: Add a mouseover event listener to an element that changes its border color.
let box=document.querySelector(".box")
box.addEventListener("mouseover",()=>{
    box.style.border="5px solid black"
})

box.addEventListener("mouseleave",()=>{
    box.style.border=""
})
