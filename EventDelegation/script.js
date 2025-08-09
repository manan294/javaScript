                                            // Event Delegation



var parent = document.querySelector("#parent")

parent.addEventListener("click",function(details){
    if(details.target.id === "play"){
        console.log("play song")
    }
    else if (details.target.id === "pause"){
        console.log("pause song")
    };
})



                                               // Custom Event



const evt = new Event("manan")//make event and store it in any var

document
  .querySelector("button") //attch the event with any dom elemnt(.querySelector)
  .addEventListener("manan", function () {
    alert("manan event is running");
  });


document.querySelector("button").dispatchEvent(evt);//dispatch the event from that dom element in which you attached the event