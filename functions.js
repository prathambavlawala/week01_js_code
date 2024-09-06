function welcome() {
    console.log(`Welcome to the class`);
}

function greet(name){
    console.log(`Hello, ${name}`);
}

console.log(typeof welcome);
console.log(typeof greet );

// Function Expression
var welcome = function(){
    console.log(`Welcome to the class`);
}

// Arrow function
var welcome = () => {
    console.log(`Welcome to the class`);
}

var greet = name => {
    console.log(`Hello, ${name}`);
}

var add = (a,b) => {
    return a + b
}

function print(a, b, ...c){
    console.log(arguments);
    console.log(a);
    console.log(b);
    console.log(c);

}

print(1, 2, 3,4, 5);