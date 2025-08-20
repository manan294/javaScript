// QUESTION 2
// var img1 = document.querySelector('#one')
// var img2 = document.querySelector("#two");
// var btn = document.querySelector("#btn");
 
// btn.addEventListener("click", function() {
//     var src1 = img1.src
//     var src2 = img2.src;
 
//     img1.src = src2;
//     img2.src = src1;
// })






// <!-- //QUESTION 3 -->
// var form = document.querySelector("#form");
// var inps = document.querySelectorAll('input[type="text"]');
// var err = document.querySelector('#err')
// var h4 = document.querySelector("h4")

// form.addEventListener("submit", function(event) {
//     event.preventDefault()
//     for(var i = 0; i < inps.length; i++) {
// if(inps[i].value.trim() === '') {
//         err.textContent = "Please fill out all fields";
//         err.style.color = "red";
//        break;
//     }}
// });







// <!-- //QUESTION 4 -->
// var add = document.querySelector("#add");
// var remove = document.querySelector("#remove");
// var inp = document.querySelector("input");
// var ul = document.querySelector("ul");
//     var li;


// add.addEventListener("click", function() {
// if(inp.value.trim() === '') {}
// else{
//     li = document.createElement("li");
//     li.textContent = inp.value;
//     ul.appendChild(li);
//     inp.value = '';
// }
// })

// remove.addEventListener("click", function() {
//     ul.removeChild(li);
//     inp.value = '';
// })







// <!-- //QUESTION 5 -->
// var start = document.querySelector("#start");
// var stop = document.querySelector("#stop");
// var h3 = document.querySelector("h3");
// var int; 

// start.addEventListener("click", function() {
//     var count = 0
//     int = setInterval(function(){
//         h3.textContent = count;
//         count++
//     },1000)
// })

// stop.addEventListener("click", function() {
//     clearInterval(int);

// })







// <!-- //QUESTION 6 -->
// var divs = document.querySelectorAll(".tab")
// var texts = document.querySelectorAll("h3");

// texts[0].style.display = "block";
// texts[0].style.width = "50%";

// divs.forEach(function(div, index) {
//     div.addEventListener("click", function() {
// hideAlltexts();
// texts[index].style.display = "block"
// texts[index].style.width = "50%";
//     })
// })

// function hideAlltexts(){
// texts.forEach(function(text) {
//     text.style.display = "none";
// })
// }






// <!-- //QUESTION 7 -->
// var progress = document.querySelector("#progress");
// var h3 = document.querySelector("h3");

// var count = 0;
// var int = setInterval(function() {
//     if (count === 100) {
//         clearInterval(int);
//         h3.style.opacity = "1";
//     }
//     count++
//     progress.style.width = count + "%";
// },40)








// <!-- //QUESTION 8 -->

