// assgniment 1
const height = 175.26;
let color = "black";
var likePizza = true;
color="blue";
likePizza = false;

console.log(height);
console.log(color);
console.log(likePizza);

//functions Assgniment 1
function sum(a,b){
    return a + b;
}
// let ans = sum(2,3);
let ans = sum("2","3") // when we pass strings then it provides concatination operation
console.log(ans);

// function assignment 2
function canVote(age){
    if(age>=18){
        return true;
    }
    else{
        return false;
    }
}
let ans1= canVote(17);
console.log(ans1);

// if/else assignment 1
function checkEvenOrOdd(number){
    if(number%2==0){
        console.log(number+" is an Even Number ");
    }
    else{
        console.log(number+" is an Odd Number ");
    }
}
checkEvenOrOdd(5);

// loops Assignment 1
function oneToNSum(n){
    let sum = 0;
    for(let i=1;i<=n;i++){
        sum = sum+i;
    }
    console.log(sum);
}
oneToNSum(5)
