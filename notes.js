const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicateNotes = notes.filter((note) => note.title === title)

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('note added'))
    } else {
        console.log(chalk.red.inverse('already existing note with same title'))
    }

}

const saveNotes = (notes) => {
    const data = JSON.stringify(notes)
    fs.writeFileSync('notes-1.json', data)
}

const loadNotes = () => {
    try {
        const buffer = fs.readFileSync('notes-1.json');
        const bufferjson = buffer.toString();
        return JSON.parse(bufferjson)
    } catch (e) {
        return []
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notestokeep = notes.filter((note) => note.title !== title)

    if (notes.length > notestokeep.length) {
        console.log(chalk.green('note removed'))
        saveNotes(notestokeep)
    } else {
        console.log(chalk.red('no note found'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.blue('Listing all notes'))
    notes.forEach((note) => {console.log(chalk.yellow(note.title))})
}

const readNotes = (title) => {
    const notes = loadNotes()
    const displaynote = notes.find((note) => note.title === title)
    if (displaynote) {
        console.log(chalk.inverse(displaynote.title))
        console.log(displaynote.body)
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}