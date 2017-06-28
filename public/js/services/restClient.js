;(function (services, $) {

    const ajaxUtil = window.util.ajax;

    function createNote(title, description, importance, dueDate) {
        return ajaxUtil.ajax("POST", "/note/", {
            title: title,
            description: description,
            importance: importance,
            dueDate: dueDate
        });
    }

    function getNote(id) {
        return ajaxUtil.ajax("GET", "/note/" + id, undefined);
    }

    function getNotes() {
        return ajaxUtil.ajax("GET", "/notes/", undefined);
    }

    function updateNote(id, title, description, importance, dueDate, finished) {
        return ajaxUtil.ajax("PUT", "/note/" + id, {
            _id: id,
            title: title,
            description: description,
            importance: importance,
            dueDate: dueDate,
            finished: finished
        });
    }

    function setFinished(id, finished) {
        return ajaxUtil.ajax("PUT", "/note/" + id + "/setFinished", {
            _id: id,
            finished: finished
        });
    }

    services.restClient = {
        getNote,
        updateNote,
        getNotes,
        createNote,
        setFinished
    };
}(window.services = window.services || {}, jQuery));