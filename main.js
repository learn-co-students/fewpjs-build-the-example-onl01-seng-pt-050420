// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

let glyphStates = {
  "♡": "♥",
  "♥": "♡"
};

let colorStates = {
  "red" : "",
  "": "red"
};

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", () => {
  let articles = document.getElementsByClassName("media-post")
  for (article of articles) {
    article.querySelector(".like-glyph").addEventListener("click", (e) => {
      mimicServerCall()
        .then(likeCallback(e))
        .catch( () => {
          let modal = document.getElementById("modal")
          modal.className = ""
          setTimeout(() => modal.className = "hidden", 5000)
        })
    })
  }
})

function likeCallback(e) {
  let heart = e.target
  heart.innerText = glyphStates[heart.innerText]
  heart.style.color = colorStates[heart.style.color]

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
