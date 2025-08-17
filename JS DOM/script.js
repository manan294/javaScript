// var btn  = document.querySelector('button')
// var h1 = document.querySelector("h1")


// btn.addEventListener('click', function() {
//     alert('Button clicked!');
// })

// btn.textContent = "started...."

// btn.textContent += "Click me";//to add text to the existing text

// h1.innerHTML = '<i>hello</i>'




//ADDING STYLES TO THE ELEMENTS

// h1.style.color = "red"
// h1.style.fontFamily = "gilroy"
// h1.style.fontSize = "19px"



//ADDING CLASS TO THE ELEMENTS

// h1.classList.add('makeitred')



//CREATING AND DELETING ELEMENTS


//creating h1
// var h1 = document.createElement('h1')
// h1.textContent = "Hey, I am a new element"
// h1.classList.add('makeitred')


// document.querySelector('body').appendChild(h1)


//creating image
// var img = document.createElement('img')
// img.src =
//   "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?_gl=1*j9gcvs*_ga*ODA5OTIzODg5LjE3NDMxNzUwNjI.*_ga_8JE65Q40S6*czE3NTU0Mzg0MTIkbzIxJGcxJHQxNzU1NDM4NDUyJGoyMCRsMCRoMA..";
//   document.querySelector('body').appendChild(img)










// var btn = document.querySelector('button');
// btn.addEventListener('click', function() {
// btn.textContent = "started....";
// btn.style.color = "red";
// })


document.querySelector('body')
.addEventListener("mousemove",function(dets) {
    console.log(dets.x, dets.y);
})