// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let errorModal = document.getElementById("modal")
errorModal.className = "hidden"

document.addEventListener("DOMContentLoaded", () => {

  let hearts = document.getElementsByClassName("like")
  for (let i=0; i<hearts.length; i++) {
    hearts[i].addEventListener("click", function() { 
      mimicServerCall().then(function(res) {
        let heartIcon = hearts[i].getElementsByTagName("span")[0]
        console.log('heart', heartIcon)
        if (heartIcon.innerHTML === EMPTY_HEART) {
          heartIcon.innerHTML = FULL_HEART
          heartIcon.className = "activated-heart"
        } else {
          heartIcon.innerHTML = EMPTY_HEART
          heartIcon.classList.remove("activated-heart")
        }
      }).catch(function(err) {
        errorModal.classList.remove("hidden")
        setTimeout(function(){ errorModal.className = "hidden"; }, 5000);
      })
    })
  }
});


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
