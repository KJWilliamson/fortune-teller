let button = document.querySelector("#fortune");
let modal = document.querySelector("#modal");

button.addEventListener("click", function() {


let randomNum = Math.floor( Math.random() * 7 ) +1;
let answers = "";
  switch (randomNum) {
  case 1: 
    answers = "You will embark <br>on a long trip<br> very soon"; 
    break; 
  case 2:
    answers = "You will receive<br> wonderful news <br>next month";
    break; 
  case 3:
    answers = "Be patient.<br> It's not time."; 
    break;
  case 4: 
    answers = "Ask for that <br>promotion";
    break;
  case 5:
    answers = "Buy a lottery <br>ticket on the <br>next Saturday.";
    break;
  case 6: 
    answers = "Join that gym <br>you drive past <br>everyday.";
    break;
  case 7:
    answers = "Stop worrying<br> and just ask.";
    break;
  }
  modal.innerHTML = answers;

});


