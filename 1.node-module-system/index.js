const allFunction = require('./export')

console.log(allFunction.add(10, 20));
console.log(allFunction.sub(10, 20));
console.log(allFunction.mul(10, 20));

try {
  console.log('this is try block');
  
  console.log(allFunction.div(100, 0));
  
} catch (error) {
  console.log(error.message);
  
}


