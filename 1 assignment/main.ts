
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