const input = document.querySelector("input");
const button = document.querySelector("button");
const errorMessage = document.querySelector("#errormessage");
let showYears = document.querySelector("#years");
let showMonths = document.querySelector("#months");
let showDate = document.querySelector("#date");
let errorElement = document.querySelector("#error");

function hideError() {
  errorMessage.visibility = "hidden";
}

function showError(errorText, visible) {
  errorMessage.style.visibility = visible;
  errorElement.innerText = errorText;
}

let calculateAge = () => {
  if (input.value) {
    let today = new Date();
    let userAge = new Date(input.value);
    let userYear = userAge.getFullYear();
    let userMonth = userAge.getMonth();
    let userDate = userAge.getDate();
    let currentYear = today.getFullYear();

    let currentMonth = today.getMonth();
    let currentDate = today.getDate();
    console.log(currentMonth - userMonth);

    if (userYear <= currentYear) {
      showYears.innerText = currentYear - userYear;
      showError("", "hidden");
    } else {
      showError("Year is not valid", "visible");
      return;
    }

    if (currentMonth >= userMonth) {
      showMonths.innerText = currentMonth - userMonth;
    } else {
      showMonths.innerText = userMonth - currentMonth;
    }


    if (userDate >= currentDate) {
      showDate.innerText = userDate - currentDate;
    }else{
		showDate.innerText = currentDate - userDate;
	}


  } else {
    showError("This field is required", "visible");
    return;
  }

  showError("", "hidden");
};

button.addEventListener("click", calculateAge);
