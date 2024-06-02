#! /usr/bin/env node
interface Student {
   name: string;
   seniorStatus: boolean;
   completedAssignment: boolean;
}

let student: Student[] = [];

student.push(
   { name: "Ali", seniorStatus: false, completedAssignment: true },
   { name: "Fayaz", seniorStatus: true, completedAssignment: true },
   { name: "Qurban", seniorStatus: false, completedAssignment: false },
   { name: "Zunan", seniorStatus: true, completedAssignment: false }
);

function findSeniorStudentsWithAssignments(students: Student[]): Student[] {
   return student.filter(student => student.seniorStatus && student.completedAssignment);
}

function updateClassList(students: Student[]): Student[] {
   return students.filter(student => !student.seniorStatus|| student.completedAssignment);
}


console.log("Senior students with completed assignments:", findSeniorStudentsWithAssignments(student));
console.log("Updated class list:", updateClassList(student));