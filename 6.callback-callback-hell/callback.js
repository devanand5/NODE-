
function add(a, b, callback){
  callback()
  return a+b
}

function cl() { // => callback function
  console.log('this is callback function')
}

add(1, 2, cl)

console.log(add(10, 20, cl));
