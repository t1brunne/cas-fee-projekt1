/**
 * Created by tobiasbrunner on 21.05.17.
 */

(function () {
    $(document).ready(function () {

        let render = function () {

            var sortBy = $('input[type="radio"]:checked').val();
            var reverseSortOrder = $('input[type="radio"]:checked').attr("data-reverse-sort-order");
            var filterBy = $("#cbxFinished")[0].checked ? false : $("#cbxFinished")[0].value;
            var toDos = notesStorage.getNotes(sortBy, filterBy, reverseSortOrder)

            document.getElementById("anzahlEintraege").innerHTML = toDos.length;

            var toDosTemplate = $('#toDosTemplate').html();
            var createToDosHtml = Handlebars.compile(toDosTemplate);
            $("#notes").html(createToDosHtml(toDos));
            for (let elem of toDos) {
                $("#cbx" + elem.id).on('change', function () {
                        notesStorage.setFinished(elem.id, this.checked);
                        render();
                    }
                );
            }
        };

        $("#cbxFinished").change(function () {
            render();
        });

        $("#sortButtons").change(function () {
            render();
        });

        render();
    });
})();