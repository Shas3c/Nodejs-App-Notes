const yargs = require('yargs')
const notes = require('./notes.js')

yargs.command({
    command: 'add',
    describe: 'add a note',
    builder: {
        title: {
            decribe: 'add title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'body of title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
        //console.log('yo')
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove title',
    builder: {
        title: {
            describe: 'remove a title',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {
        //console.log('remove')
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'listing all notes',
    handler: () => {
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'read note',
    builder: {
        title: {
            describe: 'read a note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNotes(argv.title)
    }
})

yargs.parse()