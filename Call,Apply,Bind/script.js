//call apply bind are the ways to call functions by assuming the objects by this



//CALL

//for example obj
const custobj = {
  name: "John",
  age: 30,
};

function abcd() {
  console.log(this);
}

abcd.call(custobj);



//APPLY

const custobj2 = {
  name: "Ansull",
//   age: 30,
};

function abcd(a,b,c) {
  console.log(this,a,b,c);
}

abcd.apply(custobj2,[1,2,3]);



//BIND

const custobj3 = {
  name: "manan",
  age: 18,
};  

function abcd(a, b, c) {
  console.log(this);
}

const laterusefunction = abcd.bind(custobj3);

laterusefunction();
