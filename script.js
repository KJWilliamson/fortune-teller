let button = document.querySelector("#fortune");
let modal = document.querySelector("#modal");

button.addEventListener("click", function() {


let randomNum = Math.floor( Math.random() * 14 ) +1;
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
    answers = "Buy a lottery <br>ticket Saturday.";
    break;
  case 6: 
    answers = "Join that gym <br>you drive past <br>everyday.";
    break;
  case 7:
    answers = "Stop worrying<br> they'll say no<br> and just ask.";
    break;
  case 8:
    answers = "Take that job<br> in another <br>country.";
    break;
  case 9:
    answers = "Change careers.<br> It's not too<br> late."
    break;
  case 10:
    answers = "Change is <br>coming, so <br>go with <br>the flow!";
    break;
  case 11:
    answers = "You will have an<br>opportunity to <br>choose a different <br>path";
    break;
  case 12:
    answers = "Give less <br>attention or <br>energy to <br>unproductive <br>situations";
    break;
  case 13:
    answers = "Build something <br>new in <br>your life.";
    break;
  case 14:
    answers = "You see which <br>behavioral patterns, <br>people, or situations <br>no longer <br>serve you";
    break;
    
      }
  
  modal.innerHTML = answers;

});


