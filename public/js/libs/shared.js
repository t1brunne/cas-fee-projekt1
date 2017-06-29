/**
 * Created by tobiasbrunner on 22.06.17.
 */

class Note {
    constructor(title, description, importance, dueDate, id,
                finished, createdDate) {
        this._title = title;
        this._description = description;
        this._importance = importance;
        this._dueDate = dueDate;
        this._id = id;
        this._finished = finished;
        this._createdDate = createdDate;
    }

    get finished() {
        return this._finished;
    }

    get createdDate() {
        return this._createdDate;
    }
/*
    get createdDateMoment() {
        return moment(this._createdDate);
    }
*/
    get title() {
        return this._title;
    }

    get description() {
        return this._description;
    }

    get importance() {
        return this._importance;
    }

    get dueDate() {
        return this._dueDate;
    }
/*
    get dueDateMoment() {
        return this._dueDate ? moment(this._dueDate) : false;
    }*/
}


Array.prototype.filterBy = function (attributeName) {
    return this.filter(function (obj) {
        return !obj[attributeName];
    });
};

Array.prototype.sortBy = function (attributeName, reverse) {
    if (reverse) {
        return this.sort(function (a, b) {
            return b[attributeName] - a[attributeName];
        });
    } else {
        return this.sort(function (a, b) {
            return a[attributeName] - b[attributeName];
        });
    }
};

let createNotesFromJsObjects = function (objects) {
    var notes = [];
    for (let o of objects) {
        notes.push(new Note(o.title, o.description, o.importance, o.dueDate, o._id, o.finished, o.createdDate));
    }
    return notes;
};