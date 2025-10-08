 
const num = Math.floor(Math.random() * 101);
console.log(num);

let a = Number(prompt("Enter a number"));
let v = 0;

if (num == a) {
  console.log("It's a correct number.");
}else{
  for (v = 0; v < 5; v++) {
    if (num > a) {
      a = Number(prompt("Your number is smaller"));
    } else if (num < a) {
      a = Number(prompt("Your number is greater"));
    } else {
      console.log("It's a correct number.");
      break;
    }
  }
}
if (v == 5) {
  console.log("Your time is up");
}
