// Array Methods
//Push

let array = [ "a","b","c","d","e","f"];
array.push("g",1,"z");
console.log(array);
//Pop
// pop removes an item from the end of the array
array =[ "a","b","c","d","e","f"];
array.pop();
array.pop();
console.log(array);

//shift
// shift removes an item from the start of the array
array =[ "a","b","c","d","e","f"];
array.shift();
console.log(array);
//unshift
// unshift adds items to the start of an array
 array =[ "a","b","c","d","e","f"];
array.unshift("g",1,"z");
console.log(array);

//spread operator
// used for combini9ng arrays and operators
array =[ "a","b","c","d","e","f"];
 let newArray = [ ...array, "g", "h", "i"];
 console.log(newArray);

//Reverse
console.log(array.reverse());
// find
let studentsArray = [
     { id :13, sex:"M", name : "Robb"},
   { id : 34, sex:"M", name : "Gertrude"},
    {id : 12, sex:"f", name : "janet"},
    {id : 38, sex:"F", name : "Nonye"}
];
let students = studentsArray.find(x => x.id === 34);
console.log(students);
//filter
let femaleStudents = studentsArray.filter(x => x.sex ==="f")
console.log(femaleStudents);
// map assignment



//Functions
function doSomethingelse(parameter){
    //write the code you want the function to run
};
//const doSomething =(parameter1,parameter2){
    //write the code you want the function to run
//};
 function addNumbers(x,y,z)
{
    console.log(x + y * z);
}
addNumbers(3,5,8);
addNumbers(2,15,10);

 function pythagoras(opp, adj){
    // 1st Method
    console.log(   (opp**2 + adj**2)**0.5)
    // 2nd Method
    //console.log( Math.sqrt( opp**2 + adj**2) );
};

 pythagoras(3,4);
 pythagoras( 7,24);