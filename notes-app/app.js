console.log('Starting notes app');

const fs = require('fs');
const os = require('os');
const notes = require('./notes');

const _ = require('lodash');

const user = os.userInfo();

console.log(notes.add(2,5));

fs.appendFile('greetings.txt', `Hello ${user.username} you are 24`);
