const store = require("../services/notesStorage.js");


module.exports.getNotes = function (req, res) {
    store.getNotes(function (err, notes) {
        res.json(notes || {});
    })
};

module.exports.createNote = function (req, res) {
    let order = store.createNote(req.body, function (err, note) {
        res.json(note);
    });
};

module.exports.updateNote = function (req, res) {
    let order = store.updateNote(req.body, function (err, note) {
        res.json(note);
    });
};

module.exports.setFinished = function (req, res) {
    let order = store.setFinished(req.body, function (err, note) {
        res.json(note);
    });
};

module.exports.getNote = function (req, res) {
    store.getNote(req.params.id, function (err, note) {
        res.json(note);
    });
};


