/* let user;

function yourName() {
  user = prompt("What is your name?");
  return document.write(user);
} 


function timeOfDay(param1, param2) {
  let time = prompt("Hi " + user + ", what hour is it? (0 - 23)");

  let message; 

  if (time < 12) {
    message = "Good morning " + user + param1;
  } else if (time <= 18) {
    message = "Good afternoon " + user + param2;
  } else if (time < 24) {
    message = "Good night " + user;
  } else {
    message = "That hour does not exist " + user;
  }
  console.log(message);
  return message;
}
*/

function locationLiverpool() {
  let answer;
   while (answer !='Liverpool') { 
    answer = prompt("Where is Liverpool FC located in England?");
  
    if (answer !='anfield') {
      alert ("Try Again");
    } else {
      alert("Congratulations, you are correct!");
    }
   }
  }
  locationLiverpool();


function displayChampionsCup() {
  let output = "";
  let ChampionsCup = prompt("How many times has Liverpool won the Champions League?");
  for (let i = 0; i < ChampionsCup; i++) {
    output += "<img class='trophy' src='imagens/uefa.jpg' alt='cup'>";
  }s
  return document.write(output);
}

displayChampionsCup();