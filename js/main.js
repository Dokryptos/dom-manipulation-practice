
const mainTitle = document.getElementById("main-title");
mainTitle.innerHTML = "Welcome, LoopeyTunes";



const infoCollection = document.getElementsByClassName("info");

const infoElementArray = [...infoCollection];

infoElementArray.forEach(function(element){
    element.style.color = 'blue';
});

const allParagraphsHtmlCollection = document.getElementsByTagName("p");




const first = document.querySelector("header h2"); // first element matching the selector
const all = document.querySelectorAll("header h2");// all element matching selector 

// querySelectorAll returns a nodelist (we can use forEach)
all.forEach(function(elm){
    elm.style.color = "orange"
})


//document vs. element

allParagraphsHtmlCollection

const productsElm = document.getElementById('products');
const allPInProductsElm = productsElm.getElementsByTagName('p');

const allPInProductsElm_Alternative = document.querySelectorAll("#products p");






//Properties

const pikachuElm = document.getElementById('pikachu');
pikachuElm.innerHTML =
pikachuElm.innerHTML = `
    <div>
        <p>one</p>
        <p>two
            <a href="#">click here for more info</a>
        <p>
    </div>
`;

//read/modify text content -->
const linkElm = document.getElementById("my-link");
linkElm.innerText = "About us --"


//Read/Modify CSS --> elm.style
mainTitle.style.color = "purple";
mainTitle.style.backgroundColor = "yellow";
mainTitle.style.border = "5px solid black"

//Read/Modify the id --> elm.id
mainTitle.id = "new-id"

//Read/Modify class --> elm.className
mainTitle.className = "title rounded";

//(bonus) elm.classList (provides methods to access class names)

// - elm.classList.remove("foo");
// - elm.classList.add("new-class")
// - elm.classList.toggle("active")

mainTitle.classList.toggle("important");


/* Attributes */

// get: elm.getAttribute
const result = linkElm.getAttribute("href"); 

//modify or create : elm.setAttribute
linkElm.setAttribute("href", "https://ironhack.com");
linkElm.setAttribute("target","_blank");


//remove : elm.removeAttribute()


//Create a DOm Node 

// step1: create the element
const newImg = document.createElement("img");


// step2: add content or modify (ex. innerHTML...)
newImg.setAttribute("src", "./images/pikachu.jpg");
newImg.setAttribute("alt", "beatiful pokemon");
newImg.classList.add("pikachu-img")
newImg.classList.toggle('active')




//step3: append to the dom: `parentElm.appendChild()`
const parentElm = document.getElementById("pikachu")
parentElm.appendChild(newImg)



// Events 

/*
Examples of Events :
    -Documents (DOMContentLoaded, ...)
    - mouse events (ex: click, mouseover, ...)
    -keyboard events (ex. keydown, keypress, keyup)

    Elm.addEventListener("nameOfTheEvent", code);
    Elm.addEventListener("click", () => {})
    */

const btn = document.getElementById("button-1");


btn.addEventListener("click", () => {

    const newP = document.createElement("p");

    newP.innerText = "I love Javascript but not use DOM";
    newP.setAttribute('style', 'text-align:center;')

    const parentElmBtn = document.getElementById("pikachu")
    parentElmBtn.appendChild(newP)
});



document.addEventListener('keyup', (event) => {
    console.log(event)
    if(event.code === 'Space') {

        console.log("you've pressed the spacebar");

        const newDiv = document.createElement("div")


        newDiv.innerText = 'I Love DOM right now !!!'

        newDiv.setAttribute('style', 'color:red')

        document.getElementById('pikachu').appendChild(newDiv);

    } else if (event.code === 'ArrowRight'){
        newDiv.setAttribute('position', 'relative')
        

    }else if (event.code === 'ArrowLeft'){
        newDiv.setAttribute('position', 'relative')


    }else if (event.code === 'ArrowUp'){
        newDiv.setAttribute('position', 'relative')


    }else if (event.code === 'ArrowDown'){
        newDiv.setAttribute('position', 'relative')

    }
})

//Attach event to multiple elements 

const allBtn = document.querySelectorAll(".btn")
allBtn.forEach((elm) =>{
    elm.addEventListener("click", () => {
    })
})

///

document.addEventListener("click", () => {
    console.log('Are you click ???')
})

////

//attach event to button 2
const box2 = document.getElementById("box-2");
box2.addEventListener("click", ()=>{
        console.log('it s box 2');
})

//attach event on the document general
document.addEventListener("click", ()=>{
    console.log('it s document');
})


/* Detect Events on elements created dynamically */
/************************************************/

/*
One option, using event bubbling: 
https://stackoverflow.com/a/34896325/11298742

*/


// Input

const calcBtn = document.getElementById("calculate-btn")
calcBtn.addEventListener('click', () => {
    const priceElm = document.getElementById('price')
        
})