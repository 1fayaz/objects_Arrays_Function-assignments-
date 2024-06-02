
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
