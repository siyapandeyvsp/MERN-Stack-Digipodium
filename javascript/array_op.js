const nums=[2,6,1,7,2,9,4,93]

for (let i=0;i<nums.length;i++){
    console.log(nums[i]);

}
for(let i of nums){
    console.log(i);
}
console.log("forEach fucntion");
//number , element, array (arguments of the foreach function)
// nums.forEach();// functions are passed in the form of callback functions

// nums.forEach(()=>{console.log(n)});
//find sum of all elements of the array
let sum=0;
nums.forEach((n)=>{sum+=n}); // isme var kam krega qki ye function hai , forEach is asynchronous
// here n is local variable for the function  by default

console.log("sum",sum);


//create a new array with cube of all numbers of the array

let cubes=[];
console.log(nums)
nums.forEach((n)=>{cubes.push(n**3)});
console.log(cubes);
//same
let myArr=[];
for (i of nums){
    myArr.push(i**3);
}
console.log(myArr);

const prices=['$687.35','$56.87','$78.99','$90.00','$12.00','$45.00'];
//remove dollar sign and convert to number
let newPrices=[];
prices.forEach((price)=>{
    newPrices.push(parseFloat(price.slice(1)));
})
console.log(newPrices);

//question: find the sum of all the prices
letsumPrices=0;
prices.forEach((price)=>{
    letsumPrices+=parseFloat(price.slice(1));

})
console.log(letsumPrices);