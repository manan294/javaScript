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
