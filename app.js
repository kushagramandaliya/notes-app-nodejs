const chalk = require('chalk')
const notes = require('./notes.js')
const yargs = require('yargs')
const { argv } = require('yargs')

// customize yargs version
yargs.version('1.1.0')

// create add command
yargs.command({
    command: 'add',
    describe: 'Adding a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body Note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNotes(argv.title , argv.body)
    }
})

// create remove command
yargs.command({
    command: 'remove',
    describe: 'removing note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler() {
        notes.removeNotes(argv.title)
    }
})

// create list command
yargs.command({
    command: 'list',
    describe: 'Read a note',
    handler() {
        notes.listNotes()
    }
})

//create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()