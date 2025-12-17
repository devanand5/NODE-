
function checkNumberEvenOrNot(num){
  return new Promise ((resolve, reject)=>{
    if (num%2 == 0) resolve('the number is even') 
    else reject('this number in odd')
  })
}

checkNumberEvenOrNot(4)
.then((value)=> console.log('Even number is ',value))
.catch((err)=> console.log(err))

checkNumberEvenOrNot(5)
.then((value)=> console.log('Even number is ',value))
.catch((err)=> console.log(err))