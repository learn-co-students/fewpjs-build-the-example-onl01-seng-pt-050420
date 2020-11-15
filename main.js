// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const err = document.getElementById("modal")
err.setAttribute("class", "hidden")

const hearts = document.getElementsByClassName("like-glyph")

function likeCallback(e) {
  let heart = e.target
  mimicServerCall(e)
  .then(function(serverMessage){
    heart.innerText = FULL_HEART
  })
      .catch( function(serverMessage) {
      err.className = ""
      setTimeout(() => {
        err.className = "hidden"
      }, 5000);
})
}

// for ( heart of hearts) {
//   heart.addEventListener("click", function(e){
//     mimicServerCall(e)
//     .then(heart => {
//       heart.innerTEXT = FULL_HEART
//       heart.setAttribute("class", "activated-heart")
//     })
//     .catch( function(err) {
//       err.className = ""
//       setTimeout(() => {
//         err.className = "hidden"
//       }, 5000);
//     })
//   })
// }




for ( heart of hearts) {
  heart.addEventListener("click", likeCallback)

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
