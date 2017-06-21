/**
 * Created by tobiasbrunner on 21.05.17.
 */

(function () {
    let render = function (toDo) {
        var editTemplate = $('#editTemplate').html();
        var createEditHtml = Handlebars.compile(editTemplate);
        $("body").html(createEditHtml(toDo));

        if (toDo && toDo.rating) {
            $("#bolt" + toDo.rating)[0].checked = true;
        }
    };

    $(document).ready(function () {

        var toDo;
        if (window.location.hash) {
            id = window.location.hash.substring(1);
            toDo = notesStorage.getNoteById(id);
        }

        render(toDo);

        $("#btnCancel").click(function () {
            window.location.replace("index.html");
        });

        $("#btnSave").click(function () {
            var newToDo = new Note(
                document.getElementById("title").value,
                document.getElementById("description").value,
                $('input[type="radio"]:checked').val(),
                $("#dueDate").val(),
            );
            if (toDo) {
                newToDo.id = toDo.id;
                newToDo.finished = toDo.finished;
            }

            notesStorage.saveNote(newToDo);
            window.location.replace("index.html");

        });

    });
})();