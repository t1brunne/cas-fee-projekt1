/**
 * Created by tobiasbrunner on 10.06.17.
 */

class Note {
    constructor(title, description, importance, dueDate, id = notesStorage.getNextID(),
                finishedDate = false, createdDate = moment().format("YYYY-MM-DD")) {
        this._title = title;
        this._description = description;
        this._importance = importance;
        this._dueDate = dueDate;
        this._id = id;
        this._finishedDate = finishedDate;
        this._createdDate = createdDate;
    }
    set id(id) {
            this._id = id;
    }
    set finished(value) {
            this._finishedDate = value ? moment().format("YYYY-MM-DD"): false;
    }
    get finished(){
        return this._finishedDate ? true : false;
    }
    get finishedDate(){
        return this._finishedDate
    }
    get finishedDateMoment() {
        return this._finishedDate ? moment(this._finishedDate) : false;
    }
    get createdDate(){
        return this._createdDate;
    }
    get createdDateMoment(){
        return moment(this._createdDate);
    }
    get title (){
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
    get dueDateMoment(){
        return this._dueDate ? moment(this._dueDate) : false;
    }
    get id() {
        return this._id;
    }
}


Array.prototype.filterBy = function(attributeName) {
    return this.filter(function(obj){
        return !obj[attributeName];
    });
};

Array.prototype.sortBy = function(attributeName, reverse){
    if (reverse) {
        return this.sort(function (a, b) {
            return b[attributeName] - a[attributeName] ;
        });
    }else {
        return this.sort(function (a, b) {
            return a[attributeName] - b[attributeName];
        });
    }
};

Array.prototype.removeById = function(id) {
    return this.filter(function( obj ) {
        return obj.id != id;
    });
};

Array.prototype.getById = function(id) {
    return this.filter(function(obj){
        return obj.id == id;
    })
};


//Array klasse um funktion "removeNote" erweitern ?

//Arrayklasse um Funktion "findbyid" erweitern