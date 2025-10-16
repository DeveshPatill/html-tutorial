const arr = ['rock','paper','scissor']
const computer = arr[Math.floor(Math.random()*9)]
console.log(computer,"selected value by computer")


const user = arr[Number(prompt("enter a value"))]
console.log(user,"selected value by user") 

if(computer == user){
    console.log("draw")
}else if(computer == "rock" && user == "paper" || computer == "paper" && user =="scissor" || computer == "scissor" && user == "rock" ){
    console.log("You loose")
}else{
    console.log("You Win")
}





