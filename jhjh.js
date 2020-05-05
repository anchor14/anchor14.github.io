var password;

var pass1="0905";

while (password != pass1) {
  password=prompt("지혜의 생일은?",' ');
  
  if (password==pass1){
    alert('딩동댕!');
  }
  else {
    alert("Incorrect password-Try again");
  }
}
