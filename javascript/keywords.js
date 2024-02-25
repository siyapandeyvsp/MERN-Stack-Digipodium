num = 56;
if (num % 2 === 0) {
  console.log("even");

  abc='something';
  let x='nice'
  var y='good'
  const pi = 3.14
  pi =333
} else {
  console.log("odd");
}
pi=333;
console.log(abc);
// console.log(x); // x is not defined bcz let is block scope
console.log(y); // y is defined bcz var is function scope (or call it global scope)
console.log(pi); // pi is defined bcz const is block scope
