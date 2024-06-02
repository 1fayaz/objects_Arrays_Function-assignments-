//3
var people = {
    friends: []
};
//4
var friend1 = {
    firstName: "Fayaz",
    lastName: "ALI Noonari",
    id: 13
};
var friend2 = {
    firstName: "Jan",
    lastName: "Sheikh",
    id: 25
};
var friend3 = {
    firstName: "Ali",
    lastName: "Hussain"
};
people.friends.push(friend1, friend2, friend3);
console.log(people);
//2 assignment
var scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
var otherArray = [];
for (var _i = 0, scrambledArray_1 = scrambledArray; _i < scrambledArray_1.length; _i++) {
    var item = scrambledArray_1[_i];
    if (typeof item === "string") {
        otherArray.push(item);
    }
    else {
        otherArray.push(String(item));
    }
}
var rearrangedArray = [
    otherArray[7],
    otherArray[4],
    otherArray[5],
    otherArray[0],
    otherArray[1],
    otherArray[6]
];
var result = rearrangedArray.join(" ");
console.log(result);
var inventory = [];
var product1 = {
    name: "Macbook Air",
    model: "M1 13-inch",
    cost: 700,
    quantity: 3
};
var product2 = {
    name: "Macbook Pro",
    model: "M1 16-inch",
    cost: 500,
    quantity: 2
};
var product3 = {
    name: "lenovo",
    model: "t580",
    cost: 350,
    quantity: 5
};
inventory.push(product1, product2, product3);
console.log("Quantity of the third product:", inventory[2].quantity);
var product4 = {
    name: "Macbook Air",
    model: "M2 15-inch",
    cost: 1400,
    quantity: 13
};
inventory.push(product4);
console.log("Updated inventory:", inventory);
var student = [];
student.push({ name: "Ali", seniorStatus: false, completedAssignment: true }, { name: "Fayaz", seniorStatus: true, completedAssignment: true }, { name: "Qurban", seniorStatus: false, completedAssignment: false }, { name: "Zunan", seniorStatus: true, completedAssignment: false });
function findSeniorStudentsWithAssignments(students) {
    return student.filter(function (student) { return student.seniorStatus && student.completedAssignment; });
}
function updateClassList(students) {
    return students.filter(function (student) { return !student.seniorStatus || student.completedAssignment; });
}
console.log("Senior students with completed assignments:", findSeniorStudentsWithAssignments(student));
console.log("Updated class list:", updateClassList(student));
