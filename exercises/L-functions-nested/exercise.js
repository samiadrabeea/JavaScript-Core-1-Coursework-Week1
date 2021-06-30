var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";
// a function that spells their name in uppercase
function nameInUppercase(name){
    return name.toUpperCase();
}

//a function that creates a shouty greeting.
function shoutyGreeting(name){
    return `HELLO ${nameInUppercase(name)}`;
}

//CALL function 
console.log(shoutyGreeting(mentor1));
console.log(shoutyGreeting(mentor2));
console.log(shoutyGreeting(mentor3));
console.log(shoutyGreeting(mentor4));
console.log(shoutyGreeting(mentor5));