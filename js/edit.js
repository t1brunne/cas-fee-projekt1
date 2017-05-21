/**
 * Created by tobiasbrunner on 21.05.17.
 */


$( document ).ready(function() {

    $("#btnCancel").click(function () {
        console.log("cancel");
    });

    $("#btnSave").click(function () {
        console.log("save");

        var newToDo = {};
        newToDo["title"] = document.getElementById("title").value;
        newToDo["description"] = document.getElementById("description").value;
        newToDo["ratingSystem"] = $('input[type="radio"]:checked').val();
        newToDo["dueDate"] = document.getElementById("dueDate").value;
        console.log(newToDo);

        var lsToDos = localStorage.getItem("toDos");
        var toDos = lsToDos ? JSON.parse(lsToDos) : [];

        toDos.push(newToDo);
        localStorage.setItem("toDos", JSON.stringify(toDos));

        window.location.replace("index.html");

    });

});