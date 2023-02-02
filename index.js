// 1. ways to print in javascript
console.log("Hello world");
alert("hello");
document.write("this is document");

// 2. javascript console API
console.log("Hello world");
console.warn("warning message");
console.error("error generated");

// 3. javascript variables
// What are variables? - containers to store data value 

/*
Multi
line
comment
*/

var number1 = 34;
var number2 = 56;
console.log(number1 + number2);

// 4. Data types in javascript
// Numbers
var num1 = 25;
var num2 = 45;

// String
var str1 = "this is first string";
var str2 = "this is second string";

// Objects
var marks = {
    a: 45,
    b: 65,
    c: 85
}
 console.log(marks);

// Boolean
var x = true;
var y = false;
 console.log(x , y);

 var und = undefined;
var und;
console.log(und);
console.log(undefined);

// print null
var n = null;
console.log(n);


/*At a very high level, there are two types of data types in javascript.
1. Primitive data types - Numbers , String , Boolean , Null , Undefined , Symbol
2. Reference data types - Objects and Arrays
*/

var arr1 = [1, 2, 3, 4, 5, 6]
var arr2 = [1, 2, "hello", 4, 5]
console.log(arr2)
console.log(arr1)

// opertaors in javascript
// Aerithmetic operators

var a = 100;
var b = 10;
console.log("The value of a+b is", a+b);
console.log("The value of a-b is", a-b);
console.log("The value of a*b is", a*b);
console.log("The value of a/b is", a/b);

// Assignment operators
var c = b;
c += 2;
c -= 2;
c *= 2;
c /= 2;
console.log(c);

// Comparison operators
var x = 25;
var y = 45;
console.log(x == y);
console.log(x >= y);
console.log(x <= y);
console.log(x > y);
console.log(x < y);
console.log(x != y);

// Logical operators
// and operator
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// or operator
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

// logical not
console.log(!true);
console.log(!false);

// Function in javascript
function avg(a, b) {
    return (a + b) / 2;
}

// DRY = Do not Repeat Yourself
c1 = avg(4, 6);
c2 = avg(14, 16);
console.log(c1, c2);

// Conditional in javascript

var age = 20;
// single if statement
if(age > 18){
    console.log("Yor are eligible for election");
}

// if-else statement
if(age > 18){
    console.log("Yor are eligible for election");
}
else{
    console.log("You are not eligible for election");
}

// if-else ladder
age = 22;
if (age > 50) {
    console.log("you are old");
}
else if (age > 30) {
    console.log("you are medium age");
}
else if (age > 20) {
    console.log("you are young");
}
else {
    console.log("you are child");
}
console.log("end of ladder");


// For loop
var arr = [1, 2, 3, 4, 5, 6, 7]
for(i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}

// For constant value
const ab = 0;
ab++;
ab = ab + 1;

// While loop
let j = 0;
while (j < arr.length) {
    console.log(arr[j]);
    j++;
}

// Do-While loop
do {
    console.log(arr[j]);
    j++;
}
while (j < arr.length)

// Break and continue

var arr = [1, 2, 3, 4, 5, 6, 7]
for (i = 0; i < arr.length; i++) {
    if (i == 2) {
        // break;
        continue;
    }
    console.log(arr[i]);
}

 let myarr = ["hello" , "om" , 25 , null , true]

// array methods

console.log(myarr.length);
myarr.pop();
myarr.shift();
myarr.push("shivay");
myarr.sort();
const arry = myarr.unshift("shivay");
console.log(arry);
console.log(myarr);

// string methods in javascript

let mystring = "This is my new string";
console.log(mystring.length);
console.log(mystring.indexOf("new"));
console.log(mystring.slice(1,5));
d = mystring.replace("my", "our");
console.log(d);


let mydate = new Date();
console.log(mydate);
console.log(mydate.getDate());
console.log(mydate.getDay());
console.log(mydate.getFullYear());
console.log(mydate.getTime());
console.log(mydate.getHours());
console.log(mydate.getMinutes());

// DOM Manipulation
let elem = document.getElementById("click");
console.log(elem);

let melem = document.getElementsByClassName("container")
console.log(melem);
melem[0].style.background = "green";
console.log(elem.innerHTML);
console.log(elem.innerText);
console.log(melem[0].innerHTML);
console.log(melem[0].innerText);

tn = document.getElementsByTagName("div");
console.log(tn);

// add child
createdElement = document.createElement("p");
createdElement.innerText = "This is a new paragraph.";
tn[0].appendChild(createdElement);
//replace child
createdElement2 = document.createElement("b");
createdElement2.innerText = "This is bold paragraph.";
tn[0].replaceChild(createdElement2, createdElement);

// Selecting using query
sel = document.querySelector(".container");
console.log(sel);
sel = document.querySelectorAll(".container");
console.log(sel);

function clicked() {
    console.log("The button was clicked");
}

window.onload = function () {
    console.log("The document was loaded");
}

// Events in javascript
 firstcontainer.addEventListener('click',function(){
    document.querySelectorAll('.container')[2].innerHTML = "<b>We have clicked</b>"
     console.log('clicked on container');
 })

firstcontainer.addEventListener('mouseover',function(){
    console.log('mouse on container');
})

firstcontainer.addEventListener('mouseout',function(){
    console.log('mouse out container');
})

let preHTML = document.querySelectorAll('.container')[2].innerHTML;
secondcontainer.addEventListener('mouseup', function () {
    document.querySelectorAll('.container')[2].innerHTML = preHTML
    console.log('mouse up container');
})

secondcontainer.addEventListener('mousedown', function () {
    document.querySelectorAll('.container')[2].innerHTML = "<b>We have clicked</b>"
    console.log('mouse down container');
})


// Arrow functions
function summ(a,b){
    return (a+b);
}
function add in middle of method then use arrow function
summ = (a,b)=>{
    return(a+b);
}

// Settimeout and setInterval
logkaro = ()=>{
    console.log('i am log')
}

setTimeout(logkaro, 1000);
setInterval(logkaro, 1000);
clr = setInterval(logkaro, 1000);
//use clearInterval(clr)/ clearTimeout(clr) to cancel setInterval / setTimeout

// Javascript localstorage
// ----localstorage help to save data as a string in data user computer.

localStorage.setItem('name' , 'hello')
localStorage
localStorage.getItem('name')
localStorage.clear()
localStorage.removeItem('name')

//Json - Transport the data
obj = {name:"hello" , length:1 , a: {this:'tha"t'}}
jso = JSON.stringify(obj);
console.log(jso);

parsed = JSON.parse(`{"name":"hello","length":1,"a":{"this":"that"}}`)
console.log(parsed);

// Template literals - Backticks
a = 25;
console.log(`this is ${a}`);