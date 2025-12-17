function add(a,b) {
  return a+b
}
add(100, 100)

function sub(a, b) {
  return a-b
}

function mul(a, b) {
  return a*b
}

function div(a, b) {
  if (b == 0) {
    throw new Error ('not allowed zero')
  }
  return a/b
}

module.exports = {
  add, sub, mul, div
}