/**
 * Created by tobiasbrunner on 21.05.17.
 */


(function () {
    $(document).ready(function () {

        let bodyclass = localStorage.getItem("bodyclass");
        if (bodyclass) {
            $("body").attr('class', bodyclass );
            $("#ddStyle").val(bodyclass);
        }

        $("#cbxFinished").prop('checked', localStorage.getItem("showFinished") == "true");

        const client = window.services.restClient;

        let render = function () {

            var sortBy = $('input[type="radio"]:checked').val();
            var reverseSortOrder = $('input[type="radio"]:checked').attr("data-reverse-sort-order");
            var filterBy = $("#cbxFinished")[0].checked ? false : $("#cbxFinished")[0].value;
            var notesList = $("#notes");
            client.getNotes().done(function(toDos){

                notes = createNotesFromJsObjects(toDos);
                notes = notes.sortBy(sortBy, reverseSortOrder);
                notes = notes.filterBy(filterBy);

                var toDosTemplate = $('#toDosTemplate').html();
                var createToDosHtml = Handlebars.compile(toDosTemplate);
                notesList.html(createToDosHtml(notes));

                notesList.on("click", ".js-finish", function(event){
                    client.setFinished($(event.currentTarget).data("id"),  this.checked).done(render)
                });
                }
            );
        };

        $("#cbxFinished").change(function () {
            localStorage.setItem("showFinished", $(this).is(":checked"));
            render();
        });

        $("#sortButtons").change(function () {
            render();
        });

        $("#ddStyle").change(function () {

            $("body").toggleClass("color");
            localStorage.setItem("bodyclass", $("body").attr('class'));

        });
        render();
    });
})();