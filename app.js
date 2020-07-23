//chapter 38-42
//1: 

function power(a,b){
    var power = Math.pow(a,b)
    document.write(power)
}

var a = 5 
var b = 2
power(a,b)

//2:

function isLeapYear(year) {

    var res = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0); 
    alert(res)
    
}
var year = prompt("Enter the year to check its leap or not")
isLeapYear(year)

//3:

function area (a,b,c){
    var s = (a+b+c)/2;
    var area = (s*((s-a)*(s-b)*(s-c)));
    document.write("<br> Area of triangle is : " + area)
}


var a = 4
var b = 4
var c = 3
area(a,b,c)

//4:


function percent   (sumOfall,totalNum){   
   var per = sumOfall/totalNum*100;
   console.log(per);
   alert("Percentage is:" + per);
   
}
function avg(sumOfall,totalSub){
    var avg = sumOfall/totalSub;
    alert ("Average is: " + avg)
}

function mainFunction(){
var sub1 = parseInt(prompt("Enter subject1 marks : "));
var sub2 = parseInt (prompt("Enter subject2 makrs : "));
var sub3 = parseInt(prompt("Enter subject3 makrs : "));
var totalNum = 300;
var totalSub = 3;
var sumOfall = sub1+sub2+sub3;

percent(sumOfall,totalNum)
avg(sumOfall,totalSub)
}

mainFunction()

//5:
var string = "hello jee"
var a = string.indexOf("j")
document.write("<br> Index of 'J' is: " + a)

//6:
var sentence = "Web app development course saylani"
document.write("<br> Sentence with vowels: "+ sentence)
var res = sentence.replace(/[aeiou]/g, "");
document.write("<br> Sentence without vowels: " + res)


//7:
var disInKm = 20.3
document.write("<br><br> Distance between gulshan and clifton is: " + disInKm +" km")
 function distanceinmeter(disInKm){
     var a = disInKm*1000;
     document.write("<br> Same distance in meter is : " + a)
 }

 function distanceinFeet(disInKm){
    var b = disInKm*3281;
    document.write("<br> Same distance in feet is : " + b)
}
function distanceinInches(disInKm){
    var c = disInKm*39370;
    document.write("<br> Same distance in inches is : " + c)
}
function distanceinCenti(disInKm){
    var d = disInKm*100000  ;
    document.write("<br> Same distance in cm is : " + d)
}

distanceinmeter(disInKm)
distanceinFeet(disInKm)
distanceinInches(disInKm)
distanceinCenti(disInKm)

//Chapter 43-48 EVENTS

function alertboxonclick(){
    alert("Hello jee!")
}

function alertt(){
    alert("Thankyou for visiting us!")
}


function removeRow (){
   var newtab= document.getElementById("tab");
    newtab.deleteRow(parentnode.parentnode.rowIndex)
}



function setNew(){
    document.getElementById("img1").src = "https://cdn.pixabay.com/photo/2016/08/03/14/24/roses-1566792__340.jpg"
}

function setOld(){
    document.getElementById("img1").src = "https://i.pinimg.com/236x/d0/03/b8/d003b82f316a0e662f047928e586701a--pictures-flowers.jpg"
}
 

let btnAdd = document.querySelector('#btn1')
let btnSub = document.querySelector('#btn2')
let input  = document.querySelector('input')

btnAdd.addEventListener('click', () => {
    input.value = parseInt(input.value) + 1;
})

btnSub.addEventListener('click', () => {
    input.value = parseInt(input.value) - 1;
})

const myform = document.getElementById("myform");

myform.addEventListener("submit", (e) =>{
    e.preventDefault();

    alert("signUP successfully!")
})





