const fs = require('fs');

const getNotes = () => {
  try {
    return JSON.parse(fs.readFileSync("notes-data.json"));
  } catch (e) {
    return [];
  }
}

const saveNotes = (notes) => {
  fs.writeFileSync("notes-data.json", JSON.stringify(notes));
}

const printNote = (note) => {
  console.log(note.title);
  console.log('-----');
  console.log(note.body);
  console.log('-----');
}

const addNote = (title, body) => {
  let note = {
    title,
    body
  };
  let notes = getNotes();
  notes.push(note);
  saveNotes(notes);
  console.log('Note added!');
  printNote(note);
}

const getAll = () => {
  getNotes().map((note) => printNote(note));
}

const removeNote = (title) => {
  let notes = getNotes();
  notes = notes.filter((note) => note.title != title)
  saveNotes(notes);
}

const getNote = (title) => {
  let note = getNotes().find((note) => note.title == title)
  if (note) {
    console.log('Note ---->')
    printNote(note);
  } else {
    console.log('Note not found');
  }
}

module.exports = {
  addNote,
  getAll,
  removeNote,
  getNote,
};
