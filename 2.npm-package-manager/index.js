const lodash = require('lodash')

const names = ['deva', 'anand', 'kapilan', 'bhavani']

const capArr = lodash.map(names, lodash.upperCase)

console.log(capArr);
