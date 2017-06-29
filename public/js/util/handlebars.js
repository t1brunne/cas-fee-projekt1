/**
 * Created by tobiasbrunner on 10.06.17.
 */

;(function () {
    Handlebars.registerHelper('times', function (n, block) {
        var accum = '';
        for (var i = 1; i < parseInt(n) + 1; i++)
            accum += block.fn(i);
        return accum;
    });

    Handlebars.registerHelper('formatDateFromNow', function (datetime) {
        if (moment) {
            return moment(datetime).fromNow();
        }
        else {
            return datetime;
        }
    });

    Handlebars.registerHelper('formatDate', function (datetime) {
        if (moment && datetime) {
            return moment(datetime).format("YYYY-MM-DD");
        }
        else {
            return datetime;
        }
    });

    Handlebars.registerHelper('breaklines', function (text) {
        text = Handlebars.Utils.escapeExpression(text);
        text = text.replace(/(\r\n|\n|\r)/gm, '<br>');
        return new Handlebars.SafeString(text);
    });

    Handlebars.registerHelper('isChecked', function (importance, input) {
        return parseInt(importance) === parseInt(input) ? 'checked' : '';
    });

    Handlebars.registerHelper('overFlow', function (plaintext, numlines, options) {
        let lines = plaintext.split(/\r\n|\r|\n/g);
        if (lines.length > numlines) {
            return options.fn(this);
        } else {
            return options.inverse(this);
        }
    });
})();