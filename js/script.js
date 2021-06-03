const guessedLetters = document.querySelector(".guessed-letters");
const guessBtn = document.querySelector(".guess");
const guessInput = document.querySelector("input");
const wordProgress = document.querySelector(".word-in-progress");
const remaining = document.querySelector(".remaining");
const guessesSpan = document.querySelector("span");
const button = document.querySelector(".play-again hide");
const word = "magnolia";


//Display circle symbols for each letter of word to be guessed
const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
      console.log(letter);
      placeholderLetters.push("●");
    }
    wordProgress.innerText = placeholderLetters.join("");
  };

  placeholder(word);

  guessBtn.addEventListener("click", function(e){
    e.preventDefault();
    lettersInput = guessInput.value;
    console.log(lettersInput);
    guessInput.value = "";
  });

