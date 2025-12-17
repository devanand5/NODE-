const { isUtf8 } = require('buffer')
const fs = require('fs')
const path = require('path')

// sync

const folderPath = path.join(__dirname, 'data') // folder path
console.log(folderPath)
if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath)
  console.log('file created')
}
const filepath = path.join(folderPath, 'example.txt') // file path
if (!fs.existsSync(filepath)) {
  fs.writeFileSync(filepath, 'devanand\nkapilan') // write data
}
const data = fs.readFileSync(filepath, 'utf8')  // read data
console.log(data);

fs.appendFileSync(filepath, '\nbhavani\nsanthakumar');

// async

const file = path.join(folderPath, 'example1.txt');
if (!fs.existsSync(file)) {
  fs.writeFile(file, 'DEVANAND', (err)=>{
    if (err) throw err.message
  })
}

fs.readFile(file, (err, data)=>{
  if (err) {
    throw err.message
  }
  else{
    console.log(data.toString())
  }
})

fs.appendFile(file, '\nBHAVANI\nKAPILAN', (err)=>{
  if (err) throw err.message
})
