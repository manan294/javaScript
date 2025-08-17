//setTimeout

// setTimeout(function () {
//     console.log("heyy")
// }, 3000);






//setInterval

// var count= 0
// const myinterval = setInterval(function(){
//     count++
//     console.log(count)
//     if(count === 5)clearInterval(myinterval)
// },1000) 








// fetch API

// fetch(`https://randomuser.me/api/?results=50
// `)
//   .then((rawdata) => rawdata.json())
//   .then((readable) => console.log(readable.results));






//Axios      //more user friendly than fetch

// axios.get("https://randomuser.me/api/?results=50")
// .then(result=>{console.log(result.data.results)})







//Promises   //it gives a reciet of the data that is being fetched and tells us about the status of the task whether it is completed or not

// const reciet = new Promise(function (resolve, reject) {
//   fetch("https://randomuser.me/api/")
//     .then((raw) => raw.json())
//     .then((result) => {
//       if (result.results[0].gender === "male") resolve();
//       else reject()
//     });
// });

// reciet
//   .then(function () {
//     console.log("resolved");
//   })
//   .catch(function () {
//     console.log("rejected");
//   });








  //Callbacks


  // example1
  // function abcd (a,b){
  //   b()
  // }

  // abcd(1,function(){console.log("callback function")})


  // example2
  // function dosomeAsynctask(url,callback){
  //   fetch(url)
  //   .then(raw=> raw.json())
  //   .then(data=>{callback(data)
  //   })

  // }


    // example3
//   function getData(url,callback){
//     fetch(url)
//     .then(raw=> raw.json())
//     .then(data=>{
// callback(data)    })

//   }

//   getData("https://randomuser.me/api/", function (data) {console.log(
//     data.results[0].gender,
//     data.results[0].email,
//     data.results[0].name.first
//   );});







//async await

// async function getData(){
//   let data = await fetch("https://randomuser.me/api/")
//     .then((raw) => raw.json())
//     .then((Data) => console.log(Data.results[0]));
//   // console.log(data);
// }

// getData();






// Event loop





//Callbacks vs Promises vs Async Await


//with callback
// function dataFetcher(url,callback) {
//   axios.get(url).then((result) => callback(result));
// }

// dataFetcher();


// dataFetcher("https://randomuser.me/api/", function (result) {
//   console.log(result);
// });




//with promise
// function dataFetcher(url) {
//   const status = new Promise(function (resolve, reject) {
//     fetch(url)
//       .then((raw) => raw.json())
//       .then((result) => {
//         resolve(result);
//       })
//       .catch((error) => reject(error));
//   });

//   return status;
// }

// dataFetcher("https://randomuser.me/api/").then(function (result) {
//   console.log(result);
// });




//async await
// async function dataFetcher(url) {
//   let data = await fetch(url)
//   let result = await data.json()
//   return result;
// }

// async function displayData(){
// let data = await dataFetcher("https://randomuser.me/api/")
// console.log(data);}
// displayData();





//generators
// function* generator(){
//   console.log("Generator function started");
// yield 1;
//   console.log("first yield executed");
// yield 2;
//   console.log("second yield executed");
// yield 3;
// }

// const ans = generator()
// console.log(ans.next().value);
// console.log(ans.next().value);
// console.log(ans.next().value);






//web workers
var nums= Array.from({length: 1000}, (_, i) => i + 1);

const worker = new Worker("worker.js");
worker.postMessage(nums);

worker.onmessage = function(data) {
  console.log(data.data)
}