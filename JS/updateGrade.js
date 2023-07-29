/**
 * This lines of code dynamically updates the grade when a score is updated
 * Event listener is added to each input field to listen for inputs
 **/

let scores = document.querySelectorAll(".score"); // select all input field with class score

scores.forEach((score) => {
 
  let parent = score.parentElement;
  let gradeLetter = parent.nextElementSibling.querySelector(".gradeLetter");
  let message = "";

  score.addEventListener("input", () => {
    let scoreValue = score.value;

    if (scoreValue === "") {
        message = "";
    } else if (isNaN(scoreValue) || scoreValue < 0 || scoreValue > 100) {
      message = "Invalid";
    } else if (scoreValue >= 70 || scoreValue === 100) {
      message = "A";
    } else if (scoreValue >= 60) {
      message = "B";
    } else if (scoreValue >= 50) {
      message = "C";
    } else if (scoreValue >= 45) {
      message = "D";
    } else if (scoreValue >= 40) {
      message = "E";
    } else {
      message = "F";
    }

    gradeLetter.innerText = message;
  });
});
