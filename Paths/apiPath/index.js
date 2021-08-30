const fs = require('fs');
const path = require('path')
const router =require('express').Router();
const db = require('../../db/db.json');

router.get('notes', (req, res) => {
    let savedNotes = db;
    res.json(savedNotes)
 
});

router.post('/notes', (req, res) => {
    req.body.id = db.length.toString();
    const note = createNewNote(req.body, db);
    res.json(note);
});

function createNewNote(body, notes) {
    const note = body;
    notes.push(note);
    fs.writeFileSync(
      path.join(__dirname, '../../db/db.json'),
      JSON.stringify({db:notes}, null, 2)
    );
    return note;
  }

module.exports = router;