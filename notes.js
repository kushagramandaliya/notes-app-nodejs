const fs = require('fs')
const chalk = require('chalk')
const { title } = require('process')

//simple method
// const getNotes = function() {
//     return "Your notes.."
// }

const addNotes = (title , body)  => {
    const notes = loadNotes()
    //arrow function method
    const duplicateNote = notes.find((note) => note.title === title)
    //simple method
    // const duplicateNotes = notes.filter(function (note) {
    //     return note.title === title
    // })

    if(!duplicateNote){
        notes.push ({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.blue.inverse('New Note added'))
    }
    else{
        console.log(chalk.yellow.inverse('Note taken!'))
    }

    
}

const removeNotes =  (title) => {
    const notes = loadNotes()
    const notestokeep = notes.filter((note) => note.title !== title)
    //simple method
    // const notestokeep = notes.filter(function (note) {
    //     return note.title !== title
    // })
    if(notes.length > notestokeep.length){
        console.log(chalk.green.inverse('Note Removed'))
        saveNotes(notestokeep)
    }
    else{
        console.log(chalk.red.inverse('No note found'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse('Your Notes'))
    notes.forEach((note) => {
        console.log("********************************");
        console.log(note.title)
        console.log(note.body)
        
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if(note){
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    }
    else{
        console.log(chalk.red.inverse('Note Not found!'))
    }
} 

const saveNotes =(notes) => {
    const datajson = JSON.stringify(notes)
    fs.writeFileSync('notes.json' , datajson)
}

const loadNotes = function() {

    try{
        const databuffer = fs.readFileSync('notes.json')
        const datajson = databuffer.toString()
        return JSON.parse(datajson)

    } catch (e) {
        return []
    }
 
}

module.exports = {
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNote: readNote
}