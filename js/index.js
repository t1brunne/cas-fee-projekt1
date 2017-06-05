/**
 * Created by tobiasbrunner on 21.05.17.
 */

$(document).ready(function () {


    Handlebars.registerHelper('times', function(n) {
        var accum = '';
        for(var i = 0; i < n; ++i)
            accum += "\2607";
        return accum;
    });

    Handlebars.registerHelper('formatDate', function(datetime) {
        if (moment) {
            return moment(datetime).fromNow();
        }
        else {
            return datetime;
        }
    });

    let getToDos = function(){
        var lsToDos = localStorage.getItem("toDos");
        return lsToDos ? JSON.parse(lsToDos) : [];
    }

    let setToDos = function(toDos){
        localStorage.setItem("toDos", JSON.stringify(toDos));
        var lsToDos = localStorage.getItem("toDos");
        return lsToDos ? JSON.parse(lsToDos) : [];
    }

    let render = function() {

        var toDos = getToDos();
        console.log(toDos);
        document.getElementById("anzahlEintraege").innerHTML = toDos.length;

        if (!$("#cbxFinished")[0].checked) {
            toDos = toDos.filter(function(obj){
                return !obj.finished;
            })
        }
        console.log("neu:", toDos);

        var toDosTemplate = $('#toDosTemplate').html();
        var createToDosHtml = Handlebars.compile(toDosTemplate);
        $("#notes").html(createToDosHtml(toDos));
        for (let elem of toDos){
            $("#cbx" + elem.id).on('change', function(){
                    updateNote(elem.id, this.checked)
                }
            );
        }
    };


    let updateNote = function(id, checked){
        var toDos = getToDos();
        var currToDo = toDos.filter(function( obj ) {
            return obj.id == id;
        })[0];
        if (checked) {
            currToDo.finished = true;
        } else {
            currToDo.finished = false;
        }
        var newToDos = toDos.filter(function( obj ) {
            return obj.id != id;
        });
        newToDos.push((currToDo));
        setToDos(newToDos);
        render()
    };

    $("#btnCreatedDate").click( function() {
            var toDos = getToDos();

            setToDos(toDos.sort(function (a, b) {
                return moment(a.dueDate) - moment(b.dueDate);
            }));
            render();
        }
    );
    $("#cbxFinished").change(function(){
        render();
    })
    //get data attribute
    render();


})
;