"use strict";
// Define an array to store student information
let student = [];
// Add student data to the array
student.push({ name: "Ali", seniorStatus: false, completedAssignment: true }, { name: "Fayaz", seniorStatus: true, completedAssignment: true }, { name: "Qurban", seniorStatus: false, completedAssignment: false }, { name: "Zunan", seniorStatus: true, completedAssignment: false });
// Function to find senior students with completed assignments (Optional)
function findSeniorStudentsWithAssignments(students) {
    return student.filter(student => student.seniorStatus && student.completedAssignment);
}
// Function to update class list by removing students who haven't completed assignments (assuming only seniors are responsible) (Optional)
function updateClassList(students) {
    return students.filter(student => !student.seniorStatus || student.completedAssignment);
}
// Example usage of optional functions
console.log("Senior students with completed assignments:", findSeniorStudentsWithAssignments(student));
console.log("Updated class list:", updateClassList(student));
