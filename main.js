// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let articleHearts = document.querySelectorAll(".like");


function like(e) {
  let heart = e.target;
  mimicServerCall("fakeUrl")
  .then(function(serverMessage){
    if (heart.innerText === EMPTY_HEART) {
      heart.innerText = FULL_HEART;
      heart.style.color = "red";
    } else if (heart.innerText === FULL_HEART) {
      heart.innerText = EMPTY_HEART;
      heart.style.color = "";
    };
  })
  .catch(function(error) {
    alert("Massive error!")
  });
}

for (let glyph of articleHearts) {
  glyph.addEventListener("click", like);
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
