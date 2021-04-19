// Defining text characters for the empty and full hearts for you to use later.
window.addEventListener("DOMContentLoaded", (event) => {
  const modal = document.getElementById("modal")
  const message = document.querySelector("p#modal-message")
  modal.hidden = true; 

 })

const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

let glyphStates = {
  "♡" : "♥", 
  "♥" : "♡"
};

let colorStates = {
  "red" : "",
  "" :"red"
};
 
let articleHearts = document.querySelectorAll(".like");


function likeCallback(e) {
  let heart = e.target;
  mimicServerCall("fakeUrl", {forceFailure: true})
  .then(function(serverMessage){
    alert("You notified the server!");
    alert(serverMessage);
    heart.innerText = glyphStates[heart.innerText];
    heart.style.color = colorStates[heart.style.color];
  })
  .catch(function(error){
    document.getElementById("modal").className = ""
    modal.classList.remove("hidden")
    window.setTimeout(() => {
          modal.className = "hidden"
        }, 5000)
  });
};

for (let glyph of articleHearts) {
  glyph.addEventListener("click", likeCallback);
}


// Your JavaScript code goes here!

// document.addEventListener("DOMContentLoaded", (event) => {
//   const modal = document.getElementById("modal")
//   const message = document.querySelector("p#modal-message")
//   const posts = document.querySelectorAll("article")

//   modal.hidden = true; 

//   for (const post of posts) {
//     const like = post.querySelector("li.like")
//     like.addEventListener("click", function(e) {
//       mimicServerCall()
//       .then(function(){
//         const heart = like.querySelector("span")
//         if (heart.innerText == EMPTY_HEART) {
//           heart.innerText = FULL_HEART
//           heart.className = "activated-heart"
//         } else {
//           heart.innerText = EMPTY_HEART
//           heart.classList.remove("activated-heart")
//         }
//       })
//       .catch((error) => {
        
//         message.innerText = error
//         modal.classList.remove("hidden")
//         window.setTimeout(() => {
//           modal.className = "hidden"
//         }, 5000)
//       })
//     })
//   }
// })


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
