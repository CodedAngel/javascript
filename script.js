//alert("connected");
//console.log("connected");

// 1. Data and Variable Types
//String , Number, Boolean, object, array, null,Etc
// Variable types includes;
// const, let and var

// const
// declaration and assignment of variables ===


const name ='John'; //string
const surname = 'kikanme';
let age = 15; //number
var job = 'Tutor'; //string
let married =false; //boolean i.e true or false
var height='1.5m'; //string
let nickname ='007'; //string
const state ="Delta";

age = 16; //reassigning a variable
// name ='magnus'; const cannot be reassigned a new value 

console.log(name);
console.log(age);
console.log(job);
console.log(married);
console.log(height);
console.log(nickname);
console.log(surname);


//concatenation
//console.log(name + ' ' + surname);

//john is a 16years old tutor and hails from delta state

console.log( name  +" " + surname + " hails from " + state + " state and he is a " + age + " years old " + job);


// template string

console.log(`${name} ${surname} hails from ${state} state and he is a ${age} years old ${job}`);

//Arithmetic Operations
console.log( 12 + 2); //add
console.log(12 - 2); //substraction
console.log(12 / 2); //division
console.log(12 * 2); //multiplication
console.log(12 ** 2); //power off
console.log(12 % 7); // remainder

//equality or comparison operators

//Equality / comparison Operators includes
// == equal
// === equivalent
// != not equal
// !== not equivalent 

// logical operators include
// && and 
// || Or 

console.log(3 + 5 == 8);//true
console.log(3+ 5 === 8); //true
console.log(8 =="8"); // true
console.log(8 === "8"); //false
console.log("3" + "5" == 8); //false
console.log("3" + " 5" ==="8") //false
console.log("3" + 5 == 8) //false
console.log( "3" + 5 === 35) //false


//inequality and inequivalence
 console.log( 9 + 5 != 14);
console.log( 9 + 5 !== 14 );
console.log(9 + 5 != 10);
console.log(9 + 5 !== 10);
console.log(9 != "9");
console.log(9 !== "9");
console.log("9" + "5" != "14");
console.log("9" + "5" !== "14");
console.log("9" + "5" != "95");
console.log("9" + "5" !== "95");
console.log("9" + "5" != 95);
console.log("9" + "5" !== 95);


console.log( "===== conditional statements =====")

// if statement
// if else statement
// if else if statement
// ternary operators
// conditional and statement
// switch statement

if( 2 + 4 === 6)
{
    console.log("correct")
}else{
    console.log("incorect")
}
// if else statement
if( 2 + 4 === 6){
    console.log("1st is correct");
} else if ( 3*8 === 24){
    console.log("2nd is correct");
} else if ( 45-30 === 15){
    console.log("3rd is correct");
}
else if (16/2 === 8 ){
    console.log("4th is correct");
}
else{
    console.log("none is correct");
}


// ternary operators
2 + 4 === 6 ? console.log("correct") : console.log("incorrect");

// ternary operators for if else if statement
 2 + 4 === 6 ? console.log("1st is correct"):
 3 * 8 === 24 ? console.log("2nd is correct"):
 45 - 30 === 15 ? console.log("3rd is correct"):
 16/2 === 8 ? console.log("4th is correct"):
 console.log("none is correct");

 //conditional and statement

 2 + 4 === 6 && console.log("correct");

 // take home : switch statement

 switch (new Date() .getMonth()){
    case 0:
        month = "january";
        break;
        case 2: 
        month= "june";
        break;
        case 3:
            month= "december";
            default :
                month= "none of the above ";

 }
// conditional and logical statement

if(2 + @ === $ || 3 * 8 === 24){
console.log(true);
}else{
    console.log(false);
};
if( 2 + 2 === 14 && 3 * 8 === 24 )
{
    console.log(true);
} else {
    console.log
}









