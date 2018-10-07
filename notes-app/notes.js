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

const addNote = (title, body) => {
  let note = {
    title,
    body
  };
  let notes = getNotes();
  notes.push(note);
  saveNotes(notes);
  console.log('Note added!');
  console.log(title);
  console.log('-----');
  console.log(body);
}

const getAll = () => {
  console.log(getNotes());
}

const removeNote = (title) => {
  let notes = getNotes();
  notes = notes.filter((note) => note.title != title)
}

const getNote = (title) => {
  let note = getNotes().find((note) => note.title == title)
  if (note) {
    console.log('Note ---->')
    console.log(note.title);
    console.log('-----')
    console.log(note.body);
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
