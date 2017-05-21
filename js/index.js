/**
 * Created by tobiasbrunner on 21.05.17.
 */

$(document).ready(function () {

    var lsToDos = localStorage.getItem("toDos");
    var toDos = lsToDos ? JSON.parse(lsToDos) : [];

    document.getElementById("anzahlEintraege").innerHTML = toDos.length;
    console.log(toDos.length);
    for (i in toDos){
        console.log(toDos[i]);

    }


})
;