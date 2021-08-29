const fs = require('fs');
const path = require('path')
const router =require('express').Router();
let noteBank = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

router.get('notes', (req, res) => {
    let newNotes = noteBank;
    res.json(newNotes)
});

router.post('/notes', (req, res) => {
    req.body.id = noteBank.length.toString();
    const note = createNewNote(req.body, noteBank);
    res.json(noteBank);
});

function createNewNote(body, notes) {
    const note = body;
    notes.push(note);
    fs.writeFileSync(
      path.join(__dirname, '../../db/db.json'),
      JSON.stringify({noteBank:notes}, null, 2)
    );
    return note;
  }

module.exports = router;