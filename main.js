// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!



// add .hidden class to error modal
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  modal.hidden = true;
})

// recognize when a user clicks on an empty heart (recognizing events)
document.addEventListener("DOMContentLoaded", () => {
  const emptyLikeButtons = document.getElementsByClassName("like")

  for (const button of emptyLikeButtons){
    button.addEventListener("click", (e) => {
      console.log("clicked!")
      mimicServerCall()
      .then((response) => {
        // console.log(response)
        heartClick(e.target)
      })
      .catch((error) => {
        displayError(error)
      })
    })
  }
});

function displayError(error){
  const modal = document.getElementById("modal");
  modal.hidden = false;
  modal.innerText = error;

  setTimeout(() => modal.hidden = true, 5000)
};

function heartClick(target){
  if (target.innerHTML === FULL_HEART){
    target.innerHTML = EMPTY_HEART
    target.removeAttribute("class")

  } else if (target.innerHTML === EMPTY_HEART){
    target.innerHTML = FULL_HEART
    target.setAttribute("class", "activated-heart")
  }
};

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