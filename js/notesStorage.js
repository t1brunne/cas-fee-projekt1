/**
 * Created by tobiasbrunner on 10.06.17.
 */


let notesStorage = (function () {
    "use strict";

    //in Array.prototype?
    let getNextID = function() {
        var toDos = getNotes();
        return toDos.reduce(function (prevVal, elem) {
            return elem.id >= prevVal ? elem.id + 1 : prevVal;
        }, 0);
    }

    let createNotesFromJsObjects = function(objects){
        var notes = [];
        for (let o of objects){
            notes.push(new Note(o._title, o._description, o._importance, o._dueDate, o._id, o._finishedDate, o._createdDate));
        }
        return notes;
    }

    let getNotes = function (orderBy = "id", filterBy, reverseSortOrder = false) {
        var lsToDos = localStorage.getItem("toDos");
        var notesJsObject = lsToDos ? JSON.parse(lsToDos) : [];
        var notes = createNotesFromJsObjects(notesJsObject);

        notes = notes.sortBy(orderBy, reverseSortOrder);
        notes = notes.filterBy(filterBy);
        return notes;
    };


    let setFinished = function (id, value) {
        var note = getNoteById(id);
        note.finished = value;
        saveNote(note);
    };

    let saveNote = function(note){
        var toDos = getNotes();
        var newToDos = toDos.removeById(note.id);
        newToDos.push((note));
        setNotes(newToDos);
    };

    let setNotes = function(notes){
        localStorage.setItem("toDos", JSON.stringify(notes));
    };

    let getNoteById = function(id){
        var toDos = getNotes();
        var toDo = toDos.filter(function( obj ) {
            return obj.id == id;
        })[0];
        return toDo ? toDo : [];
    };

    return {
        saveNote: saveNote,
        getNoteById: getNoteById,
        getNotes : getNotes,
        setFinished: setFinished,
        getNextID: getNextID
    }
})();
