/**
 * Created by tobiasbrunner on 21.05.17.
 */

;(function () {

    const client = window.services.restClient;


    let render = function (toDo) {
        var editTemplate = $('#editTemplate').html();
        var createEditHtml = Handlebars.compile(editTemplate);
        $("body").html(createEditHtml(toDo));

        if (!toDo) {
            $("#bolt1")[0].checked = true;
        }

        $('#editForm').submit(function (event) {
            const title = $("#title");
            const description = $("#description");
            const importance = $('input[type="radio"]:checked');
            const dueDate = $("#dueDate");

            if (toDo) {
                client.updateNote(toDo._id,
                    title.val(),
                    description.val(),
                    importance.val(),
                    Date.parse(dueDate.val()),
                    toDo.finishedDate
                ).done(function (msg) {
                    window.location.replace("index.html");
                }).fail(function (msg) {
                    //nothing!
                });
            } else {

                client.createNote(title.val(),
                    description.val(),
                    importance.val(),
                    Date.parse(dueDate.val())
                ).done(function (msg) {
                    window.location.replace("index.html");
                }).fail(function (msg) {
                    //nothing!
                });
            }
            event.preventDefault();

        });

        $("#btnCancel").click(function () {
            window.location.replace("index.html");
        });
    };

    $(document).ready(function () {
        $("body").attr('class', localStorage.getItem("bodyclass"));
        var toDo;
        if (window.location.hash) {
            id = window.location.hash.substring(1);
            client.getNote(id).done(function (toDo) {
                render(toDo);
            });
        } else {
            render()
        }

    });
})();