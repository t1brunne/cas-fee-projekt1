/**
 * Created by tobiasbrunner on 10.06.17.
 */


const Datastore = require('nedb');
const db = new Datastore({ filename: './data/order.db', autoload: true });

    let getNotes = function (callback) {
        db.find({}, function(err, notes){
            callback(err, notes);

        });
    };


    let setFinished = function (note, callback) {
       getNote(note._id, function(err, newNote) {
           newNote.finished = note.finished ? Date.now() : false;
           updateNote(newNote, callback);
       });
    };

    let createNote = function(note, callback){
        note.createdDate = Date.now();
        db.insert(note, function(err, newNote){
            if(callback){
                callback(err, newNote);
            }
        });
    };

    let getNote = function(id, callback){
        db.findOne({_id: id}, function(err, note){
            callback(err, note);
        });
    };

    let updateNote = function(note, callback){
        db.update({_id: note._id}, note, {}, function(err, numreplaced){
            callback(err, note);
        });
    };

module.exports = {getNotes,
    getNote,
    createNote,
    updateNote,
    setFinished
};
