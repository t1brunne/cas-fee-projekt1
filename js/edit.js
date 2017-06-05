/**
 * Created by tobiasbrunner on 21.05.17.
 */
let render = function(toDo) {
    var editTemplate = $('#editTemplate').html();
    var createEditHtml = Handlebars.compile(editTemplate);
    $("body").html(createEditHtml(toDo));
    if (toDo.ratingSystem) {
        $("#bolt" + toDo.ratingSystem)[0].checked = true;
    }
};

let getToDo = function(id){
    var toDos = getToDos();
    var toDo = toDos.filter(function( obj ) {
        return obj.id == id;c
    })[0];
    return toDo ? toDo : [];
};

let getToDos = function() {
    var lsToDos = localStorage.getItem("toDos");
    return lsToDos ? JSON.parse(lsToDos) : [];
};

let setToDo = function(note){
    var toDos = getToDos()
    var filteredToDos = toDos.filter(function( obj ) {
        return obj.id != note.id;
    });
    filteredToDos.push(note);
    localStorage.setItem("toDos", JSON.stringify(filteredToDos));
};

let getNextId = function(){
    var toDos = getToDos();

    return toDos.reduce(function(prevVal, elem) {
        return elem.id >= prevVal ? elem.id + 1 : prevVal;
    }, 0);
}

$( document ).ready(function() {


    var id;
    if(window.location.hash) {
        id = window.location.hash.substring(1);
        var toDo = getToDo(id);
        render(toDo);

    } else {
        render();
    }

    $("#btnCancel").click(function () {
        window.location.replace("index.html");
    });

    $("#btnSave").click(function () {
        id = id ? id : getNextId();
        console.log(id);
        var newToDo = {};
        newToDo["title"] = document.getElementById("title").value;
        newToDo["description"] = document.getElementById("description").value;
        newToDo["ratingSystem"] = $('input[type="radio"]:checked').val();
        newToDo["dueDate"] = $("#dueDate").val();
        newToDo["id"] = id;

        setToDo(newToDo);
        window.location.replace("index.html");

    });

});