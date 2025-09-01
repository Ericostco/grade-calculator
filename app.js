// let animationWrapper = document.querySelector(".animation-wrapper");
// const timeLine = new TimelineMax();
// timeLine
//   .fromTo(
//     animationWrapper,
//     1,
//     { height: "0%", width: "80%" },
//     { height: "80%", width: "100%", ease: Power2.easeInOut }
//   )
//   .fromTo(
//     animationWrapper,
//     1,
//     { opacity: 1, zIndex: 1 },
//     { opacity: 0, ease: Power2.easeInOut, zIndex: -1 }
//   );

let btn = document.querySelectorAll(".btn");

btn.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

window.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
  }
});

let courseCredit = document.querySelectorAll(".course-credit");
let courseGrade = document.querySelectorAll(".course-grade");

courseCredit.forEach((creditField) => {
  creditField.addEventListener("input", (e) => {
    calculateGPA();
  });
});

courseGrade.forEach((gradeField) => {
  gradeField.addEventListener("change", (e) => {
    calculateGPA();
    changeSelectColor(e.target);
  });
});

function calculateGPA() {
  let totalPoints = 0;
  let totalCredits = 0;

  courseCredit.forEach((credit, index) => {
    let grade = courseGrade[index].value;
    if (grade !== "" && credit.value !== "") {
      totalPoints += convertGrade(grade) * credit.valueAsNumber;
    }
    if (credit.valueAsNumber > 0) {
      totalCredits += credit.valueAsNumber;
    }
  });

  gpa =
    totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : (0).toFixed(2);
  document.querySelector("#gpa").innerText = gpa;
}

function convertGrade(grade) {
  switch (grade) {
    case "A":
      return 4.0;
    case "A-":
      return 3.7;
    case "B+":
      return 3.3;
    case "B":
      return 3.0;
    case "B-":
      return 2.7;
    case "C+":
      return 2.3;
    case "C":
      return 2.0;
    case "C-":
      return 1.7;
    case "D+":
      return 1.3;
    case "D":
      return 1.0;
    case "D-":
      return 0.7;
    case "F":
      return 0.0;
    default:
      return 0.0;
  }
}

function changeSelectColor(target) {
  if (target.value === "A" || target.value === "A-") {
    target.style.backgroundColor = "#4caf50";
  } else if (
    target.value === "B+" ||
    target.value === "B" ||
    target.value === "B-"
  ) {
    target.style.backgroundColor = "#ffeb3b";
  } else if (
    target.value === "C+" ||
    target.value === "C" ||
    target.value === "C-"
  ) {
    target.style.backgroundColor = "#ff9800";
  } else if (
    target.value === "D+" ||
    target.value === "D" ||
    target.value === "D-"
  ) {
    target.style.backgroundColor = "#f44336";
  } else if (target.value === "F") {
    target.style.backgroundColor = "#a2a0a0ff";
  } else {
    target.style.backgroundColor = "#ffffff";
  }
}
