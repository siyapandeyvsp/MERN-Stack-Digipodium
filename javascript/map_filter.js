//MAP

let nums = [23, 29, 99, 32, 67, 30, 41]
const sqrt = nums.map((n) => {
  return n ** 2
})
console.log(sqrt)

const names = ["Rachel Green", "Monica Geller", "Phoebe Buffay", "Chandler Bing", "Joey Tribianni", "Ross Geller"]

console.log(names)
let firstNames = names.map((name) => {
  return name.split(" ")[0]
})
console.log(firstNames)

const prices = [3400, 888, 3845, 2874, 2992]
console.log(prices)
const afterDiscount = prices.map((price) => {
  return price - (price * 0.1)
})
console.log(afterDiscount)


//FILTER
const filterPrices=prices.filter((price)=>{return price>1000 && price<3000})
console.log(filterPrices)




