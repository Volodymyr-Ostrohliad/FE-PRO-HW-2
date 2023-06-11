const name = prompt('What is your name?');
let message;

if (!name || !isNaN(name)) {
  message = "Sorry, you didn't want to enter your name!";
} else {
  message = `Hello, ${name}! How are you?`;
}

alert(message);
console.log(message);
console.log(name);