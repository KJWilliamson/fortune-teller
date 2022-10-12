let button = document.querySelector("#fortune");
let modal = document.querySelector("#modal");

button.addEventListener("click", function() {


let randomNum = Math.floor( Math.random() * 15 ) +1;
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
    answers = "Ask for that <br>promotion.";
    break;
  case 5:
    answers = "Buy a lottery <br>ticket Saturday.";
    break;
  case 6: 
    answers = "Keep your cool <br>at work. Trouble <br>is brewing";
    break;
  case 7:
    answers = "Stop worrying<br> they'll say no<br> and just ask.";
    break;
  case 8:
    answers = "Stay put for <br> the rest of <br>the year.";
    break;
  case 9:
    answers = "Avoid phone <br> calls today."
    break;
  case 10:
    answers = "A big change <br> is coming!";
    break;
  case 11:
    answers = "Choose a <br>different path";
    break;
  case 12:
    answers = "Work through<br> your fears before<br> it's too late.";
    break;
  case 13:
    answers = "Be careful <br>on Thursday";
    break;
  case 14:
    answers = "Avoid graveyards <br>for the month <br>of November";
    break;
  case 15:
    answers = "Trust your <br>intuition";
    break;
  case 16:
      answers = "Adopt a<br> black cat.";
      break;
  case 17:
        answers = "Don't leave <br>the house today.";
        break;
  case 18:
          answers = "Call an <br>old friend.";
          break;

      }
  
  modal.innerHTML = answers;

});


