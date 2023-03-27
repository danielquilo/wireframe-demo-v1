let user = prompt("Hi my name is Daniel, what is your name");

console.log("Hi" + user);

let time = prompt("Hi " + user + ", what hour is it? (0 - 23)");

let message;

if ( time < 12 ) {
    message = "Good Morning " + user;
} else if (time <=18)  {
    message = " Good afternoon " + user;
} else if ( time <  24) {
message = "Good night " + user;
} else {
    message = " That hour does not exist " + user;
} 


console.log(message);

let arsenalFan = confirm("I am an arsenal fan, do tou support arsenal"  +  user + "?")

if(arsenalFan == true) {
    console.log("You're great");
} else {
    console.log("you suck")
}

/*
function daniel(){
console.log("hi I am daniel");
}
*/