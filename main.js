// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let glyphStates = {
  "♡": "♥",
  "♥": "♡"
};

let colorStates = {
  "red" : "",
  "": "red"
};
const err = document.getElementById("modal")
err.setAttribute("class", "hidden")

let hearts = document.querySelectorAll(".like-glyph");

function likeCallback(e) {
  let heart = e.target;
  mimicServerCall(e)
   //OR: mimicServerCall("bogusUrl", {forceFailure: true})
    .then(function(serverMessage){
       heart.innerText = FULL_HEART
 heart.style.color = colorStates[heart.style.color];
    })
    .catch(function(error) {
      // Basic
      alert("Something went wrong!");
      // or....
      err.className = ""
      setTimeout(() => {
        err.className = "hidden"
      }, 5000);
      })
    }
  

for ( glyph of hearts) {
  glyph.addEventListener("click", likeCallback);
}


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
