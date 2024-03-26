const name = "sahil sahu"
const repoCount = 50

console.log(name+repoCount + "value") // It is not good practice

console.log(`Hello my name is: ${name} and my repocount : ${repoCount}`) //string iterpolation

const gameName = new String ("sahil-sahu-rahul-sahu-aman-sahu")
const temp = gameName.slice(-4,-1)
console.log(temp)

 
// indexing forward   0 1 2 3 4 5 6 7 8
// string   name  =   s a h i l s a h u
// backward indexing -9-8-7-6-5-4-3-2-1

console.log(gameName.replace("sahil","sonam"))

console.log(gameName.includes("sahil"))

console.log(gameName.split("-"))