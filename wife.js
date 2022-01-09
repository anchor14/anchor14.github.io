var password;

var wifePassword="tteokbokki";
var counter = 0;

while (password !== wifePassword) {

  password=prompt('Please enter your password to view this page!',' ');

  if (password==wifePassword){
    alert('Password Correct! Click OK to enter!');
  }
  else {
    alert("Incorrect password-Try again");
    counter++;

    if (counter==5) {
      alert("fuck off now");
    }
    }
}
