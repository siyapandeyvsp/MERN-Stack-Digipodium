// Questions
// 1. WAP to check if a number is prime
// 2. WAP to find all prime numbers in range of 100 - 600
// 3. WAP to print Fibonacci series.
// 4. Create a function to find area of a triangle.
// 5. Create a function to reverse a number.

// 1. WAP to check if a number is prime
// isPrime(5); //add any number
// function isPrime(num) {
//   let factors = 0;
//   if (num == 1) {
//     console.log("not prime");
//     console.log("bye");
//   } else {
//     for (let i = 2; i <= num / 2; i++) {
//       if (num % i == 0) factors++;
//     }
//     if (factors > 0) {
//       console.log("not prime");
//     } else if (factors == 0) {
//       console.log("prime");
//     }
//   }
// }

// // 2. WAP to find all prime numbers in range of 100 - 600
// primeRange(100, 600);
// function primeRange(lowerLimit, upperLimit) {
//   for (range = lowerLimit; range < upperLimit; range++) {
//     if (isPrime(range)) console.log(range);
//   }
//   isPrime();
//   function isPrime(num) {
//     let factors = 0;
//     if (num == 1) return false;
//     else {
//       for (let i = 2; i <= num / 2; i++) {
//         if (num % i == 0) factors++;
//       }
//       if (factors > 0) {
//         return false;
//       } else if (factors == 0) {
//         return true;
//       }
//     }
//   }
// }

// //4. Create a function to find area of a triangle.
// function areaTriangle(base,height)
// {
//    return(0.5*base*height)
// }
// console.log(areaTriangle(3,6))

// // 5. Create a function to reverse a number.
// //face issue with integer values in num%10

// //3. WAP to print Fibonacci series.
let num = 563456
let reverse=0



while(num>0)
{
    console.log(num)
    console.log(reverse)
   let d=num%10;
   reverse=reverse*10+d;
   num=parseInt(num/10);
}