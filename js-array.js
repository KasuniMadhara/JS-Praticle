const fruits = ["Apple", "Banana", "Mango","Orange","Grapes"];
console.log(fruits);

//frist fruit
const firstFruit = fruits[0];
console.log("First fruit is : ", firstFruit);

//last fruit
const lastFruirt = fruits[fruits.length - 1];
console.log("Last fruit is : ", lastFruirt);

//add new fruit at last
fruits.push("Pineapple");
console.log("After adding new fruit at last: ", fruits);

//remove 2nd fruit
const removedFruit  =fruits.splice(1,1);
console.log("Removed fruit is : ", removedFruit);
console.log("After removing 2nd fruit: ", fruits);

//length of array
const lengthOfFruits = fruits.length;
console.log("length of fruits array is : ", lengthOfFruits);

// print each fruit on a new line using for loop
console.log("Fruits in array are : ");
for(let i = 0; i < fruits.length; i++){
    console.log(i+1 +"=" +fruits[i]);
}

// print each fruit on a new line using  forEach() method
console.log("Fruits in array using forEach(): ");
fruits.forEach((fruits) =>{
    console.log(fruits);
})

const numbers = [2, 5, 8, 10, 12];

//use map() to create a new array that doubles each number
const doubleNumbers = numbers.map((num) => num * 2);
console.log("Original numbers array: ", numbers);
console.log("Doubled numbers array: ", doubleNumbers);

//Use .filter() to keep only numbers greater than 6
const filteredNumbers = numbers.filter((num) => num > 6);
console.log("Filtered numbers (greater than 6) : ", filteredNumbers);

//Use .reduce() to find the sum of all numbers
const sumOfNumbers = numbers.reduce((sum, num) => sum + num, 0);
console.log("Sum of all numbers: ", sumOfNumbers);

//Check if 8 is in the array (includes() method)
const hasEight = numbers.includes(8);
console.log("Array includes 8: ", hasEight);

//Find the index of 10
const indexOfTen = numbers.indexOf(10);
console.log("Index of 10 in array: ", indexOfTen);

//Sort the array in ascending order
const sortNumbers = numbers.sort((a,b) => a - b);
console.log("Sorted numbers array: ", sortNumbers);

//Create an Object
const student = {
    name: "Kasuni",
    age: 21,
    faculty: "Computing",
    subjects: ["Web development", "database systems", "Programming"]
};

//Print the student’s name and faculty
console.log("Student Name: ", student.name);
console.log("Student Faculty: ", student.faculty);

//Add a new property called year with value 2025
student.year = 2025;
console.log("After adding year property: ", student);

//Change the age to 22
student.age = 22;
console.log("After changing age: ", student);

//Print all subjects in a loop
console.log("Student Subjects: ");
student.subjects.forEach((subject) => {
    console.log(subject);
});

//Array of Objects 
const students = [
    {name: "kasuni", age: 21, faculty: "Computing"},
    {name: "Dinuka", age: 23, faculty: "Business"},
    {name: "Nimesha", age: 22, faculty: "Engineering"}
];

//Print all student names
students.forEach(student =>{
    console.log(student.name);
});

//Use .filter() to find students older than 21
const olderStudents = students.filter(student => student.age > 21);
    console.log("Students older than 21: ", olderStudents);

//Use .map() to create an array of all faculty names
const facultyNames = students.map(student => student.faculty);
console.log("Faculty names: ", facultyNames);

//Object Containing an Array of Objects
const classroom = { 
className: "IT2025", 
teacher: "Mr. Perera", 
students: [ 
{name: "Kasuni", age: 21}, 
{name: "Nimesha", age: 22}, 
{name: "Dinuka", age: 23} 
] }; 

//Print the teacher’s name
console.log("Teacher's Name: ", classroom.teacher);

//Add a new student to the array
classroom.students.push({name: "Amal", age: 20});
console.log("After adding new student: ", classroom.students);

//Print all student names in the classroom
classroom.students.forEach(student => {
    console.log(student.name);
});

//Challenge Activity 
const products = [ 
{name: "Keyboard", price: 2500, qty: 2}, 
{name: "Mouse", price: 1500, qty: 3 }, 
{name: "Monitor", price: 22000, qty: 1} 
]; 

//Calculate the total value of each product (price * qty) and print it
const totalValues = products.reduce((total,products) =>{
    return total + (products.price * products.qty);
}, 0);

console.log("Total value of all products: ", totalValues);