/**
 * Created by tobiasbrunner on 10.06.17.
 */

(function () {
    Handlebars.registerHelper('times', function (n, block) {
        var accum = '';
        for (var i = 0; i < n; ++i)
            accum += block.fn(i); //"\2607";
        return accum;
    });

    Handlebars.registerHelper('formatDate', function (datetime) {
        if (moment) {
            return moment(datetime).fromNow();
        }
        else {
            return datetime;
        }
    });
})();