// var------ explanantion it prints multiple outputs but not in let
// console.log("hello Devesh")

// var char = "its me devesh";
// console.log(char)

// var b = "my age is 22"
// console.log(b)

// let-------- explanation it prints multiple outputs but diffrent variable names we have to defined
// let a ="number"
// console.log(a)

// a ="new number"
// console.log(a)

// a = "second number"
// console.log(a)

//const --------- explanation it is a fixed value
// const a = "text"
// console.log(a)

// a = "hello"
// console.log(a)

//------- PRIMITIVE DATATYPES-----------------------------------------------------------
// let a = "string"
// console.log(a,'its a string datatype')

// let b = 123
// console.log(b,'its a number datatype')

// let c = 1.2
// console.log(c,'its a float datatype')

// let d = true
// console.log(d,'its a boolean datatype')

// let e;
// console.log(e,'its undefined datatype')

// let f = null
// console.log(f,'its null datatypes ')

// let x = Symbol();
// console.log(x,'its a symbol datattype')

// NON PRIMITIVE DATA TYPES
// ---?

//-------------OPERATORS IN JAVASCRIPT
// arithmetic operator
//addition
// let a = 10;
// let b = 20;
// let c = a + b;
// console.log(c)

// //substractio
// let x = 40;
// let y = 20;
// let z = x - y;
// console.log(z)

// //expontation
// let e = 2;
// let t = 3;
// let m = e ** t;
// console.log(m)

// // modulos
// let num1 = 10;
// let num2 = 3;
// let remainder = num1 % num2; // remainder will be 1 (10 divided by 3 is 3 with a remainder of 1)
// console.log(remainder); // Output: 1

// //increment
// let count = 5;
// let newCount = ++count; // count becomes 6, then newCount is assigned 6
// console.log(count); // Output: 6
// console.log(newCount); // Output: 6

// //decrement
// let amount = 10;
// let newAmount = amount--; // newAmount is assigned 10, then amount becomes 9
// console.log(amount); // Output: 9
// console.log(newAmount); // Output: 10

//----------- ASSIGNMENT OPERATOR

// let a = 10;
// const b  = 3;
// console.log(a)
// console.log(a=a+b)

// let yoo = 4;
// console.log(yoo -= 1)

// let yoomul = 4;
// // Expected output 3
// console.log(yoomul *= 2);

// let yoodiv = 10;
// const moo = 2;
// console.log(yoodiv /= moo)
// console.log(yoodiv /= 0)

// let yooRem = 50;
// console.log(yooRem %= 10);

// let yooExp = 2;
// console.log(yooExp **= 3);

// let yooShiftLeft = 5;
// console.log(yooShiftLeft <<= 2);

// let yooShiftRight = 5;
// console.log(yooShiftRight >>= 2);

// ---------------comparision operators
// let a = 2;
// console.log(a == "2")

// console.log(a == 6.0)

// console.log(a === 3.0)

//------------------------------------------------

// let f = 3;
// console.log(f == 3)
// console.log(f != 3)
// console.log(f > 1)
// console.log(f < 4)
// console.log(f >= 3)
// console.log(f <= 3)

//---------------logical operators

// let a = true;
// let b = false;
// let c = (a && b)
// console.log(c)

// let t = true;
// let e = false
// let r = (t || e)
// console.log(r)

// let u = true;
// let w = (!u)
// console.log(w)

// ------- if else in javascript

// let a  = 10;
// if (a > 5){
//     console.log(a,"yes, number is greater")
// }else{
//     console.log("number is smaller")
// }

// ---else if
// let z = undefined;
// if (z > 50) {
//   console.log("number is greter");
// } else if (z < 50) {
//   console.log("number is smaller");
// } else if (z == 50) {
//   console.log("number is equal");
// } else {
//   console.log("else block run hua");
// }

// ----- grade checker--------------

// let A = 90;
// if (A > 80){
//     console.log("A Grade")
// }else if (A < 75){
//     console.log("B  Grade")
// }else if (A <= 65){
//     console.log("C Grade")
// }else{
//     console.log("needs to pratice")
// }


// //------------ ternary operator in javascript
// let marks = 89;
// console.log(marks ? "pass" : "fail")
//---------  it wil print pass because its existing

// let marks 
// console.log(marks ? "pass" : "fail")
// -------- it will print fail because its not existing value in variables , variable is empty



// ------ switch statement in javascript
// -- switch statement in javascript 
// let dayOfWeek = "Friday";
// let message;

// switch (dayOfWeek) {
//   case "Monday":
//     message = "Start of the work week.";
//     break;
//   case "Wednesday":
//     message = "Hump day!";
//     break;
//   case "Friday":
//     message = "Almost the weekend!";
//     break;
//   default:
//     message = "Just another day.";
// }

// console.log(message); // Output: Hump day!

// another example-------------------------------------
// const word = "papayas";

// switch (word) {
//     case "Oranges":
//         console.log("oranges is for 55 rupees")
//     break;

//     case "mangoes":
//     case "grapes":
//         console.log("mangoes and grapes are for 100 rupess")
//     break;

//     default:
//         console.log(`sorry we are out of ${word}`)
// } 

// // --------------------- strinf literals
// let a  = 2
// console.log(("hello its a javascript " + a +  "version"))


// ----------------- functions in javascript

// function myfunc(a){
//     console.log(`hello ${a} is my age`)
// }
// myfunc(22)


// export function myfunc(w="username",d ="agenumber"){
//     console.log(`hello this is my name:- ${w} and ${d} is my age`)
// }
// myfunc("devesh", 22)


// user input in java script


// 
// let a  = prompt("please enter your name");
// console.log(a)

// -------------------------------------- grade system in js using prompt keyword 

// let score = prompt("Enter your marks")

// console.log(typeof(score))
// score = Number(score)

// score = parseFloat(score)
// console.log(typeof(score))

// score = String(score)
// console.log(typeof(score))

// if (score >= 90){
//     console.log("Grade A")
// }else if(score >= 80){
//     console.log("Grade B")
// }else if(score >= 70){
//     console.log("Grade C")
// }else if(score >= 60){
//     console.log("Grade D")
// }else{
//     console.log("Grade E")
// }

// -----------------------return keyword in javascript ------------------------
// function addition(a , b){
//     let c = a + b
//     return c
// }
// console.log(addition(2,20))

// this is global scope  --- []
// var geeksforgeeks = "Geeeksgorgeeks";
// let s = "devesh";
// const d = "priority";

// function check_global_scope(){
//     console.log(geeksforgeeks);
//     console.log(s);
//     console.log(d);
// }
// check_global_scope()

// ----------------------------------------------- Array 
// let a = [101,202,303,404,505,606,707,808,909,1000]
// console.log(a)
// console.log("------------------------------------------")
// console.log(a[1])
// console.log(a[2])
// console.log(a[3])
// console.log(a[4])
// console.log(a[5])
// console.log(a[6])
// console.log(a[7])
// console.log(a[8])
// console.log(a[9])


// it gives the size  of  the array
// let size = a.length;
// console.log(size)

// console.log("------------------------------------------")

// let commaseperate = a.toString();
// console.log(commaseperate)

//The at() method returns an indexed element from an array.
//The at() method returns the same as [].

// let at = a.at(1);
// console.log(at)

// ------------ objects in Javascript -------------------------

// const school = {
//     school_name : "DIGIFINE",
//     schooladdress : "andheri",
//     key3 : 12345,
// }

// console.log(school.school_name)

// const school = {

//     keyone:{
//         a:"leterr_one",
//         b:"letter_two"
//     },
//     name:"this is nested object",
//     number:56789,
// }
// console.log(school.keyone.a)

// -------------------------------------- multiple objects in index

// const color  = [
//     {color:"red", 
//     code:123 },

//     {color:"white",
//     code:12345},

//     {color:"orange",
//     code:12345},

//     {color:"purple",
//     code:12345},

//     {color:"blue",
//     code:12345},
// ]
// console.log(color[1].color) //white


// LOOPS IN JAVASCRIPT -------------------------------------


// for loop in javascript
// for(let i = 1; i < 10;  i++){
//     console.log("hello")
// }

// for(let i = 0; i < 4; i++){
//     console.log(color[i])
// }


// ------ for of loop in javascript ----------------------- 

// const arr = ["devesh",2,3,4,5,6,7,8,9,10]
// for (let i of arr)
//     console.log(i)

// -------- while loop in javascript ----------------------

// let a = 10;

// while(a > 5){
//     console.log("hello")
//     a--
// }

// nested loops example 
// let a = ""
// for (let i = 0; i < 5 ; i++){
//     // for (let j = 0; j <= 1; j++)
//     a = a + "*"
//         console.log(a)
//     }

// node method for printing the pattern

// for (let e = 0; e < 5; e ++){
//     for (let j=0; j<=e; j++){
//         process.stdout.write("=");
//     }
//     console.log("")
      
// }
    
// repeat method
// for(var i=1; i<=4; i++){
//        console.log("* ".repeat(i));
//     }

// 


// ------------ object oriented programming in javascript

// class Car{
//     constructor(name){
//         this.name = name
//     }
// }

// obj1 = new Car("BMW")
// obj2 = new Car("Porsche")

// console.log(obj1)
// console.log(obj2.name)
// console.log(obj2)






      console.log("hello")









