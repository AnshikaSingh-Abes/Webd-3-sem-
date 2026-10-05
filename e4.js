const fs = require('fs');

const fileName = 'student.txt';

// CREATE
fs.writeFileSync(fileName, 'Name: Anshika\nCourse: CSE AIML');
console.log('File created successfully.');

// READ
let data = fs.readFileSync(fileName, 'utf8');
console.log('\nFile Content:');
console.log(data);

// UPDATE
fs.appendFileSync(fileName, '\nCollege: ABES Engineering College');
console.log('\nFile updated successfully.');

// READ after update
data = fs.readFileSync(fileName, 'utf8');
console.log('\nUpdated File Content:');
console.log(data);

// DELETE
fs.unlinkSync(fileName);
console.log('\nFile deleted successfully.');