//1 assignment
//1
type People = {
   friends:friends[]
}
//2
type friends = {
   firstName: string,
   lastName: string,
   id?: number 
}
//3
let people: People = {
   friends: []
}
//4
let friend1: friends = {
   firstName: "Fayaz",
   lastName: "ALI Noonari",
   id: 13
}

let friend2: friends = {
   firstName: "Jan",
   lastName: "Sheikh",
   id: 25
}

let friend3: friends = {
   firstName: "Ali",
   lastName: "Hussain"
}


people.friends.push(friend1, friend2, friend3);

console.log(people);

//2 assignment


const scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];


const otherArray: string [] = []

for (const item of scrambledArray) {
    if (typeof  item === "string") {
        otherArray.push(item)
    } else {
        otherArray.push(String(item))
    }
}


const rearrangedArray: string[] = [
    
    otherArray[7], 

    otherArray[4], 

    otherArray[5], 

    otherArray[0], 

    otherArray[1], 

    otherArray[6]

]



const result: string = rearrangedArray.join(" ")

console.log(result); 

//3 assignment

interface Product {
   name: string;
   model: string;
   cost: number;
   quantity: number;
}

let inventory: Product[] = [];

let product1: Product = {
   name: "Macbook Air",
   model: "M1 13-inch",
   cost: 700,
   quantity: 3
};

let product2: Product = {
   name: "Macbook Pro",
   model: "M1 16-inch",
   cost: 500,
   quantity: 2
};

let product3: Product = {
   name: "lenovo",
   model: "t580",
   cost: 350,
   quantity: 5
};

inventory.push(product1, product2, product3);

console.log("Quantity of the third product:", inventory[2].quantity);

let product4: Product = {
   name: "Macbook Air",
   model: "M2 15-inch",
   cost: 1400,
   quantity: 13
};

inventory.push(product4);

console.log("Updated inventory:", inventory);

//4 assignment

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