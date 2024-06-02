"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//3
let people = {
    friends: []
};
//4
let friend1 = {
    firstName: "Fayaz",
    lastName: "ALI Noonari",
    id: 13
};
let friend2 = {
    firstName: "Jan",
    lastName: "Sheikh",
    id: 25
};
let friend3 = {
    firstName: "Ali",
    lastName: "Hussain"
};
people.friends.push(friend1, friend2, friend3);
console.log(people);
