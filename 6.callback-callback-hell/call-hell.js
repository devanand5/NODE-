const fs = require('fs')

fs.readFile('./call-hell.txt', (err, data)=>{
  if (err) throw err.message
  else(
    console.log(data.toString())
  )

  const uperCase = data.toString().toUpperCase()
  fs.appendFile('./call-hell.txt', uperCase, (err)=>{
    if (err) throw err.message
    console.log(uperCase)

    fs.readFile('./call-hell.js',(err, data)=>{
      if (err) throw err.message
      console.log(data.toString())
    })

  })

})