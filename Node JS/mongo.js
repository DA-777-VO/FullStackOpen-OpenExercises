const mongoose = require('mongoose')
require('dotenv').config()

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
    `mongodb+srv://ex7dev:${password}@cluster0.qfqxx3y.mongodb.net/noteApp?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery',false)

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

// const note = new Note({
//     content: '81-717/714 Nomernoi',
//     important: true,
// })
//
// note.save().then(result => {
//     console.log('note saved!')
//     mongoose.connection.close()
// })

Note.find({ important: true }).then(result => {
  result.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
})