function validateInputs(score) {
  let inputedScore = score.value.trim();

  let errorElement = document.getElementById("error");
  if (inputedScore === "") {
    errorElement = score.nextElementSibling;
    errorElement.innerText = "Please enter a score.";
    return false;
  } else if (inputedScore < 0) {
    errorElement = score.nextElementSibling;
    errorElement.innerText = "Invalid Score";
    return false;
  } else if (inputedScore > 100) {
    errorElement = score.nextElementSibling;
    errorElement.innerText = "Scores must be less than or equals to 100";
    return false;
  } else {
    errorElement = score.nextElementSibling;
    errorElement.innerText = "";
  }
  return true;
}

function totalScore(scores) {
  let total = document.querySelector(".total");
  let sum = 0;

  for (let i = 0; i < scores.length; i++) {
    const element = parseInt(scores[i].value);

    sum = element + sum;
  }
  total.innerText = sum;

  return sum;
}

let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  let average = document.querySelector(".average");
  let remark = document.querySelector(".remark");
  let emoji = document.querySelector(".emoji");
  let scores = document.querySelectorAll(".score");
  let isValid = true;

  scores.forEach((score) => {
    if (!validateInputs(score)) {
      isValid = false;
    }
  });

  if (isValid) {
    let total = totalScore(scores);
    let averageScore = total / 5;
    average.innerText = averageScore;

    if (averageScore >= 70 || averageScore === 100) {
      remark.innerText = "I'm very proud of you!";
      emoji.innerHTML =
        '<img src="./emojis/smiling_face_with_heart_eyes.gif" alt="proud emoji">';
    } else if (averageScore >= 60) {
      remark.innerText = "Yooo, you are very smart!";
      emoji.innerHTML =
        '<img src="./emojis/smiling_face_with_sunglasses.gif" alt="smiling emoji">';
    } else if (averageScore >= 50) {
      remark.innerText = "You can do better!";
      emoji.innerHTML =
        '<img src="./emojis/flexed_biceps.gif" alt="power emoji">';
    } else if (averageScore >= 45) {
      remark.innerText = "You passed!";
      emoji.innerHTML = '<img src="./emojis/thumbs_up.gif" alt="passed emoji">';
    } else {
      remark.innerText = "You disappointed your teacher!.";
      emoji.innerHTML =
        '<img src="./emojis/man_facepalming.gif" alt="disappointed emoji">';
    }
  }
});
