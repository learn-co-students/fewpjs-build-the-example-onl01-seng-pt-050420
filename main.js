// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

addHiddenClass();
let articleHearts = document.querySelectorAll(".like");
for (const glyph of articleHearts) {
    glyph.addEventListener("click", likeCallBack);
}

function addHiddenClass() {
    document.getElementById("modal").classList.add("hidden")
}

function likeCallBack(e) {
    let heart = e.target;
    mimicServerCall().then(resp => {
        heart.innerText = FULL_HEART
        heart.className = "activated-heart"
    }).catch(error => {
        document.getElementById("modal").className = ""
        setTimeout(addHiddenClass, 5 * 1000, error)
    })

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
