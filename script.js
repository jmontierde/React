// let createBlog = (title, body) => {
//     if(!title){
//         throw new Error('A title is required');
//     }
//     if(!body) { 
//         throw new Error('A body is required');

//     }
//     return alert(`${title},  ${body}`)
// }
// createBlog("Hi", "Hello");

// This keyword
// let nepal = {
//     mountains: ['Everest', 'Taal', 'Mayon'],
//     printWithDash: function(){
//             // console.log("Inside this", this);
//             // console.log(this.mountains.join(' - '))

//         setTimeout(() =>{
//             console.log(this)
//             //console.log(this.mountains.join(' - '))
//             // console.log("Inside this setTimeout", this);
//         }, 3000);
//     }
// }
// nepal.printWithDash();

// Destructing object

// let thingsTodo = { 
//     morning: "Exercise",
//     afternoon: "Work",
//     evening: "code",
//     night: ["Sleep", "Dream"]
   
// }
// let {morning, afternoon, evening} = thingsTodo;
// console.log(morning, afternoon, evening)

// let uniStudent = student => {
//     console.log(`${student.name} from ${student.uniStudent}`);
// }
// uniStudent({
//     name: 'Jayson',
//     university: 'STI College Caloocan' 
// });

// const names = ['a','b', 'c'];

// let i = 0;


// for(i = 0; i < names.length; i++){
//     console.log(names[i]);
// }

// //function declaration
// function greet(){
//     console.log("Function Declaration");
// }
// greet();

//function expression
// const speak = function(){
//     console.log("Function Expression");
// };
// speak();


// //Regular Function
// const calcArea = function(radius){
//     const pi = 3.14;
//     return pi * radius**2;
    
// }
// const area = calcArea(5);
// console.log(area);

// const reUsed = function(area){
//     return area + "Hello";
// }
// const reuse = reUsed(area)
// console.log(reuse)

//Arrow Function
const calcArea = (radius) => {
    return 3.14 * radius**2;
}
const area = calcArea(5)
console.log(area);