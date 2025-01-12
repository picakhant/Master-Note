-- Day 1 --

declare variable ==> var, let, const

var ==> function scope
let, const ==> block scope

datatype =>
Number (1, 2, 1.2, -1, 0, 1/2),
Boolean (true = 1, false = 0),
String ("Mg Mg", 'Aung Aung', `Hello World`),
Undefined, Null,
Object ({}),
Array []

-- let --
let num = 1 // 1
num = 10 // 10

let num2; // undefined

let num2 = 10 // Uncaught SyntaxError: Identifier 'num1' has already been declared

-- const --
const num;
// VM2659:1 Uncaught SyntaxError: Missing initializer in const declaration

const num = 10 // cannot update

-- traditional function --
//function defination and declaration
function myFunction() {
alert("Hello")
}

// function call to work
myFunction()

// es6 arrow syntax

const myFunction = () => {
alert("Hello");
};

myFunction();

-- object --
const person = {
name : "Mg Mg",
age : 20,
}

person.name // "Mg Mg"
person.age // 20

const person = {
name: "Mg Mg",
age: 20,
};

console.log(person.name); // "Mg Mg"
console.log(person.age); // 20

console.log(person["name"]);
console.log(person["age"]);

const person = {
name: "Mg Mg",
age: 20,
isEating: () => console.log("Mg Mg is eating"),
};

console.log(person.name); // "Mg Mg"
console.log(person.age); // 20
console.log(person.isEating()); // mg mg is eating

console.log(person["isEating"]())

-- JSON --
JS Obj --> JSON (JSON.stringify(obj))
JSON --> JS Obj (JSON.parse(json))

-- Array --
Array.lenght => conunt of item in an array
const myArray1 = ["a", "e", "i"];
const myArray2 = ["o", "u", "i"];

const myArray3 = myArray1.concat(myArray2);
const myArray4 = ["A", "B"]

// spread operator
const myArray5 = [...myArray1, ...myArray2, ...myArray4]

console.log(myArray5)

const fruit = ["apple", "orange",];

//add last
fruit.push("banana");
//add first
fruit.unshift("pineapple");
// reomve first item
fruit.shift("pineapple");
// reomve last item
fruit.pop("banana");

-- // --

[Visit OpenAI](https://openai.com)


<iframe src="https://iframe.ly/api/oembed?url=https://appwrite.io/docs/quick-starts/nextjs" width="600" height="200" style="border:none;"></iframe>


