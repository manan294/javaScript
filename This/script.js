//global scope - window

console.log(this)




//function - window

function abc (){
    console.log(this);
} 

abc()




//method - object

var obj = {
    name: "John",
    greet: function() {
        console.log(this);
    }
};

obj.greet()





//fnc inside a method - window

var obj2 = {
    outer: function(){
        console.log(this);//object
        function inner() {
            console.log(this);//window
        }
        inner();
    },
    name: "this is showing that you can access the objects by using 'this' in it",
    age: 30,
}

obj2.outer();




//fnc inside a method - object

var obj3 = {
    first:function(){
        const self = ()=>{
            console.log(this)
        }
        self();
    }
}

obj3.first(); 




//constructor function - object

function abc() {
  console.log(this);
}

const ans = new abc();




//event listener - object

document.querySelector("button")
.addEventListener("click", function() {
    console.log(this);
});