console.log('this is explorer file');

console.log('fileName', __filename);
console.log('dirName', __dirname);

module.exports.greet = (name)=>{
  return `your name is ${name}`
}
