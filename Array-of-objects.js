let students = [
    {
        name: "Anshika",
        age: 18,
        marks: 85
    },
    {
        name: "Rahul",
        age: 19,
        marks: 78
    },
    {
        name: "Priya",
        age: 18,
        marks: 92
    }
];

console.log(students);

console.log(students[0].name);
console.log(students[0].marks);

students.forEach(function(student) {
    console.log(student.name, student.marks);
});

let names = students.map(function(student) {
    return student.name;
});

console.log(names);