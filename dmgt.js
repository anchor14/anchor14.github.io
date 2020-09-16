var password;

var pass1="westnoir";
var counter = 0;

while (password != pass1) {
  password=prompt("Password pls",'');

  if (password==pass1){
    alert('Welcome!');
  }
  else {
    alert("If you don't know the pw or can't type properly then fuck off");
    counter++;
  }

  if (counter==5) {
    alert("fuck off now");
  }
}
