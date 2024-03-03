/* 1. Given nums = [ 23, 29, 99, 32, 67, 30, 41 ], create a new array containing only even numbers.
2. create a new array containing square of each element of above array.
3. given prices = [2300, 150, 5600, 2500, 900], create a new array with price less than 3000 and greater than 2000
4. create a new array containing first names of each full name stored in another array. */
//1
const nums = [23, 29, 99, 32, 67, 30, 41]
console.log(nums)
const evenNums = []
nums.forEach((num) => {
  if (num % 2 == 0) {
    evenNums.push(num)
  }
})
console.log("only even array : ",evenNums)
//2
const squareNums=[]
nums.forEach((num)=>squareNums.push(num*num))
console.log("Squares of elements : ",squareNums)
//3
const prices = [2300, 150, 5600, 2500, 900]
const filteredPrices=[]
for (let price of prices){
 if (price>2000 && price<3000){
 filteredPrices.push(price)
 }
}
console.log("prices between 2k to 3k are", filteredPrices)

const names=["Rachel Green","Monica Geller", "Phoebe Buffay","Chandler Bing","Joey Tribianni", "Ross Geller"]
console.log(names)
let firstNames=[]
names.forEach((name)=>firstNames.push(name.split(' ')[0]))
console.log(firstNames)

console.log(names)
let firstName=names.map((name)=>{return name.split(" ")[0]})
console.log(firstName)