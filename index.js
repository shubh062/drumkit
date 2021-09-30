var letter;

//This loop is for the click action using mouse
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",popParent);
}
function popParent(){
letter =this.innerHTML;//we are able to updatae this.innerHTML just because popParent is heirarchial child inside the addEventListener function
//directly we could have written playsound fxn instead of popParent;
  playSound();
  buttonanimination(letter);
}
                            //This code is for event generator for any key pressed ------------"DEMO"
                            /*
                                        document.addEventListener("keypress",function(event){
                                        console.log(event);
                                      });
                            */

//This script is for the particular keyBaord click
document.addEventListener("keypress",function(event){
  //here keypress desendent is "event"!!
  //and we are passing that parameter: "event" to our function :more specifically the
letter=event.key;//key.event which means which key is being pressed store in letter
  playSound(letter);
  buttonanimination(letter);

});



//here we have can also pass the parameter "letter" here to directly run this function
function playSound() {
                switch (letter) {
                  case "w":
                  var audio = new Audio('sounds/crash.mp3');
                  audio.play();
                  break;
                  case "a":
                  var kickbass = new Audio('sounds/kick-bass.mp3');
                  kickbass.play();
                  break;
                  case "s":
                  var tom1 = new Audio('sounds/tom-1.mp3');
                  tom1.play();
                  break;
                  case "d":
                  var tom2 = new Audio('sounds/tom-2.mp3');
                  tom2.play();
                  break;
                  case "j":
                  var tom3 = new Audio('sounds/tom-3.mp3');
                  tom3.play();
                  break;
                  case "k":
                  var tom4 = new Audio('sounds/tom-4.mp3');
                  tom4.play();
                  break;
                  case "l":
                  var snare = new Audio('sounds/snare.mp3');
                  snare.play();
                  default:
                }
    }

  function buttonanimination(key){
      var activebutton=document.querySelector("."+key);
      activebutton.classList.add("pressed");

//since the animination needs for just few second here we add the timeout function
//after a set limit of time it removes the class effect and the animination ends...
setTimeout(function(){ activebutton.classList.remove("pressed"); }, 100);

  }
