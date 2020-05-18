'use strict';

module.exports = function (app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);
    app.route('/tampil')
        .get(jsonku.tampilsemuasparepart);
    app.route('/tampil/montir')
        .get(jsonku.tampilsemuamontir);


    app.route('/tampil/:id')
        .get(jsonku.tampilberdasarkanidmontir);

        app.route('/tambahservis')
        .post(jsonku.tambahservis);

        app.route('/tambahmontir')
        .post(jsonku.tambahmontir);
    }