// IEEE 754 - 2008
let num1 = 0.7; // number
let num2 = 0.1; // number
 
num1 += num2 // 0.8
num1 += num2 // 0.9 
num1 += num2 // 1.0
num1 += num2 // 1.1
num1 += num2 // 1.2
num1 += num2 // 1.3
num1 += num2 // 1.4
num1 = ((num1 * 100) + (num2 *100)) / 100 // 1.5
num1 = ((num1 * 100) + (num2 *100)) / 100 // 1.6
num1 = ((num1 * 100) + (num2 *100)) / 100 // 1.7
num1 = ((num1 * 100) + (num2 *100)) / 100 // 1.8
num1 = ((num1 * 100) + (num2 *100)) / 100 // 1.9
num1 = ((num1 * 100) + (num2 *100)) / 100 // 2.0

num1 = Number(num1.toFixed(2))
 
console.log(num1)
console.log(Number.isInteger(num1))

//console.log(num1.toString() + num2)
//console.log(typeof num1)
//console.log(num1.toFixed(2))
//console.log(Number.isInteger(num1))
//let temp = num1 * '5'
//console.log(temp)
