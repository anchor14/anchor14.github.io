var password;

var pass1="rocktheboat";
var counter = 0;

while (password != pass1) {
  password=prompt("Password pls",'');

  if (password==pass1){
    alert('Welcome!');
  }
  else {
    alert("You need authorization to view this essay. Please ask me for the password!");
    counter++;
  }

  if (counter==5) {
    alert("don't give up!");
  }
}
