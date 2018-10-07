console.log('Starting notes app');

const fs = require('fs');
const os = require('os');
const notes = require('./notes');

const _ = require('lodash');
const yargs = require('yargs');

const user = os.userInfo();

const command = process.argv[2];

const args = yargs.argv;
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
