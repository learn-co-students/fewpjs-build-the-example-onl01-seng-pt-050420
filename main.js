// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const E = {};


// Your JavaScript code goes here!
document.addEventListener(
  "DOMContentLoaded",
  function(event) {
    E["modal"] = document.getElementById("modal");
    E["heart"] = document.getElementsByClassName("like-glyph");

    for(let i = 0; i < E["heart"].length; i++) {
      let heart = E["heart"][i];
      
      heart.addEventListener(
        "click", 
        () => { 
          mimicServerCall()
          .then(
            function(value) { 
              if (heart.textContent === FULL_HEART)
              {
                heart.textContent = EMPTY_HEART;
                heart.className = "like-glyph";
              }
              else
              {
                heart.textContent = FULL_HEART;
                heart.className = "like-glyph activated-heart";
              }
              return value;
            }
          )
          .catch( 
            function(error) {
              console.log(error);
              E["modal"].textContent = error;
              E["modal"].className = "";
              window.setTimeout(
                function() {
                  E["modal"].className = "hidden";
                },
                5000
              );
            }
          );
        }
      );
    }    
  }
);



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
