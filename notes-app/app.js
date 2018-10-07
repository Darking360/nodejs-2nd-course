console.log('Starting notes app');

const fs = require('fs');
const os = require('os');
const notes = require('./notes');

const _ = require('lodash');
const yargs = require('yargs');

const args = yargs.
  command('add', 'Add a new note', {
    title: {
      describe: 'Title of note',
      demand: true,
      alias: 't'
    },
    body: {
      describe: 'Body of the note',
      demand: true,
      alias: 'b'
    },
  })
  .command('list', 'List all notes')
  .command('get', 'Get a specific note', {
    title: {
      describe: 'Title of note to be found',
      demand: true,
      alias: 't'
    }
  })
  .command('remove', 'Remove a specific note', {
    title: {
      describe: 'Title of note to be removed',
      demand: true,
      alias: 't'
    }
  })
  .help()
  .argv;
const command = args._[0];

debugger;
if (command == 'add') {
  console.log('Adding note');
  notes.addNote(args.title, args.body);
} else if (command == 'list') {
  console.log('Listing all notes');
  notes.getAll();
} else if (command == 'get') {
  console.log('Getting a note');
  notes.getNote(args.title)
} else if (command == 'remove') {
  console.log('Removing a note');
  notes.removeNote(args.title);
} else {
  console.log('Command not recognized');
}
