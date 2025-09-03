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

document.addEventListener("click", (e) => {
  if (e.target.closest("button")) {
    e.preventDefault();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
  }
});

document.addEventListener("input", (e) => {
  if (e.target.closest("input.course-credit")) {
    calculateGPA();
  }
});

document.addEventListener("change", (e) => {
  if (e.target.closest("select.course-grade")) {
    calculateGPA();
    e.target.style.backgroundColor = changeSelectColor(e.target.value);
  }
});

function calculateGPA() {
  let courseCredit = document.querySelectorAll(".course-credit");
  let courseGrade = document.querySelectorAll(".course-grade");
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

function changeSelectColor(grade) {
  if (grade === "A" || grade === "A-") {
    return "#4caf50";
  } else if (grade === "B+" || grade === "B" || grade === "B-") {
    return "#ffeb3b";
  } else if (grade === "C+" || grade === "C" || grade === "C-") {
    return "#ff9800";
  } else if (grade === "D+" || grade === "D" || grade === "D-") {
    return "#f44336";
  } else if (grade === "F") {
    return "#a2a0a0ff";
  } else {
    return "#ffffff";
  }
}

let addBtn = document.querySelector(".add-btn");
addBtn.addEventListener("click", () => {
  // Create a new form element
  let newForm = document.createElement("form");
  newForm.classList.add("grade-item-form");

  // Create the course name input
  let courseNameInput = document.createElement("input");
  courseNameInput.setAttribute("list", "course-list");
  courseNameInput.setAttribute("type", "text");
  courseNameInput.classList.add("course-name");
  courseNameInput.setAttribute("name", "courseName");
  courseNameInput.setAttribute("required", "");
  courseNameInput.setAttribute("placeholder", "Course Name");

  // Create the course credit input
  let courseCreditInput = document.createElement("input");
  courseCreditInput.setAttribute("type", "number");
  courseCreditInput.classList.add("course-credit");
  courseCreditInput.setAttribute("name", "courseCredit");
  courseCreditInput.setAttribute("min", "0");
  courseCreditInput.setAttribute("max", "6");
  courseCreditInput.setAttribute("required", "");
  courseCreditInput.setAttribute("placeholder", "Credit");

  // Create the course grade select
  let courseGradeSelect = document.createElement("select");
  courseGradeSelect.classList.add("course-grade");
  courseGradeSelect.setAttribute("name", "grade");
  courseGradeSelect.setAttribute("required", "");

  // Create the grade options
  let grades = [
    "",
    "A",
    "A-",
    "B+",
    "B",
    "B-",
    "C+",
    "C",
    "C-",
    "D+",
    "D",
    "D-",
    "F",
  ];

  grades.forEach((grade) => {
    let option = document.createElement("option");
    option.setAttribute("value", grade);
    option.innerText = grade;
    courseGradeSelect.appendChild(option);
  });

  // Create the delete button
  let deleteBtn = document.createElement("button");
  deleteBtn.classList.add("btn", "delete-btn");
  deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';

  // Append all elements to the new form
  newForm.appendChild(courseNameInput);
  newForm.appendChild(courseCreditInput);
  newForm.appendChild(courseGradeSelect);
  newForm.appendChild(deleteBtn);

  // Append the new form to the grade item generator
  document.querySelector(".grade-item-generator").appendChild(newForm);
});
