'use strict';

module.exports = function(app) {
    var jsnku = require('./controller');
    app.route('/')
    .get(jsnku.index);
}