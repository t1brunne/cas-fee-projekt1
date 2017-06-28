;(function(util, $) {
    function ajax(method, url, data, headers) {
        return $.ajax({
            dataType: "json",
            contentType: "application/json",
            headers: headers,
            method: method,
            url: "http://localhost:3066"+url,
            data: data ?  JSON.stringify(data) : undefined
        });
    }
    util.ajax = { ajax : ajax };

}(window.util = window.util || { }, jQuery));