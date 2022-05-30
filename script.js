let button = document.querySelector("#fortune");
let modal = document.querySelector("#modal");

button.addEventListener("click", function() {


let randomNum = Math.floor( Math.random() * 6 ) +1;
let answers = "";
  switch (randomNum) {
  case 1: 
    answers = "Yes"; 
    break; 
  case 2:
    answers = "No";
    break; 
  case 3:
    answers = "Not likely"; 
    break;
  case 4: 
    answers = "It will be so";
  case 5:
    answers = "The future is yours";
  case 6: 
    answers = "It's very likely";
  }
  modal.innerHTML = answers;

});


