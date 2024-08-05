// object assignment 1
const user = [{
    name: "Gaurav Singh Negi",
    age: 21,
    city: "dehradun",
    gender: "male"
},{
    name: "Harsh Painuli",
    age: 21,
    city: "dehradun",
    gender: "male"
},{
    name: "Saniya",
    age: 20,
    city: "dehradun",
    gender: "female"
},{
    name: "Priya Sharma",
    age: 20,
    city: "Mumbai",
    gender: "female"
}]

function greets(user){
    for(let i=0;i<user.length;i++){
        console.log("Namaste/Assalamualaikum/Sat Sri Akal/Kem Chho " + user[i].name);
    }
}
greets(user);

//object assignment 2
function greeting(user){
    for(let i=0;i<user.length;i++){
        let title = "";
        if(user[i].gender == "male"){
            title = "Mr ";
        }
        else{
            title = "Mrs "
        }
        let canDoVoting = user[i].age >=18? " you are eligible to vote" : " you are not eligible to vote"
        console.log("Hii "+title + user[i].name + " your age is "+user[i].age+canDoVoting);
    }

}
greeting(user);

 // Array assignment 1
const number = [1,2,3,4,5,6,7,8,9,10];
function evenNumberOnly(number){
    let evennumber = []
    for(let i=0;i<number.length;i++){
        if(number[i]%2==0){
            evennumber.push(number[i]);
        }
    }
    console.log(evennumber);
}
evenNumberOnly(number);

// using filter function 
function evenNumberOnly(number){
    let evennumber = number.filter(function(n){
        return n %2 == 0;
    })
    console.log(evennumber);
}
evenNumberOnly(number)

function maleAnd18Plus(user){
    let maleAnd18PlusOnly = user.filter(function(user){
        return user.age >= 18 && user.gender == "male";
    })
    console.log(maleAnd18PlusOnly)
}
maleAnd18Plus(user);
