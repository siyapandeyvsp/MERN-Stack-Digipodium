for(let i =0; i<5; i++)
{
    console.log(i)
}
console.log('----------------------')
const nums=[7,2,3,4,5,6,7];
// this loop is used to iterate collections
for(let n of nums){
    console.log(n)
}

console.log('----------------------')

// find sum of all numbers from 100 to 300 which are divisible by 7 and 11
let sum=0;
for(let i=100;i<=300;i++){
    if(i%7===0 && i%11===0){
        sum+=i;
    }
}
console.log("sum is", sum)