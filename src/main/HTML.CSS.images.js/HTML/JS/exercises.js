"use strict"

// variables storing my first name and surname

var $firstName = 'Walter';

var $surName = 'Smith';

// defining JavaScript functions

function $simpleAddition(x,y){
    return x + y;
}

function $onlySee1Return(someNumber){
    return someNumber * 2;
    console.log('this will not be visible');
}

//defined a function called someExample
function someExample(){
    var localVariable = "I'm a Local!";
    alert(localVariable);

}

// called the function someExample
someExample();

// Practicing some IIFE

function printUserWithGreeting(){
    var $greetingUser = "Hey, Friend";
    return $greetingUser;
}

console.log(printUserWithGreeting());

//returns a message in the console that says Hey to the passed in name

function sayHey(name){
    return "Hey, " + name;
}


console.log(sayHey("Walter"))
