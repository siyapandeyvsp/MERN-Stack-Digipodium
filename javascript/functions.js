function addNums(a,b){
    //default global scope for c 
 //  var  c=a+b;//says c is not defined for var  function k andar ki c ko bahar use nahi kar sakte , agar block scope hota like if ... for .. etc to dikh jata outside of the block also 
 let c=a+b; //says c is not defined for let
  
return c
}
const answer= addNums(5,6);

console.log(answer);

const getAvg=function(m1,m2,m3){
    return (m1+m2+m3)/3;

}

const avg=getAvg(34,56,78);
console.log(avg);

//es6 arrow function most most most imp
const factorial = (n)=>{
    let fact=1;
    for (let i=1;i<=n;i++){
        fact*=i;
    }
    return fact;
}
console.log("factorial of  5 ",factorial(5));