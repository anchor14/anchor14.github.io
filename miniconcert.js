var password;

var pass1="culo";
var counter = 0;

while (password !== pass1) {

  password=prompt('Please enter your password to view this page!',' ');

  if (password==pass1){
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
