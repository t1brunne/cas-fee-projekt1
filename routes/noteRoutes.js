/**
 * Created by tobiasbrunner on 21.06.17.
 */
const express = require('express');
const router = express.Router();
const notes = require('../controller/noteController.js');

router.get("/notes", notes.getNotes);
router.post("/note", notes.createNote);
router.put("/note/:id/", notes.updateNote);
router.put("/note/:id/setFinished", notes.setFinished);
router.get("/note/:id/", notes.getNote);

module.exports = router;
