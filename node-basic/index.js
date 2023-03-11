console.log("Hello World !");

function add(a, b) {
  return a + b;
}

let result = add(3, 4);
console.log(result);

//

console.log(process.argv);

//
let arr = process.argv;
let newArr = arr.splice(2, 2);
console.log(newArr);

let num1 = parseInt(newArr[0]);
let num2 = parseInt(newArr[1]);

let finalResult = add(num1, num2);
console.log(finalResult);
