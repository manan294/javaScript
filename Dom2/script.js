//QUESTION 2
// var img1 = document.querySelector('#one')
// var img2 = document.querySelector("#two");
// var btn = document.querySelector("#btn");


// btn.addEventListener("click", function() {
//     var src1 = img1.src
//     var src2 = img2.src;



//     img1.src = src2;
//     img2.src = src1;
// })





var form = document.querySelector("#form");
var inps = document.querySelectorAll('input[type="text"]');
var err = document.querySelector('#err')



form.addEventListener("submit", function(event) {
    event.preventDefault()

});
