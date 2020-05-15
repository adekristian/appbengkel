'use strict';

module.exports = function(app) {
    var jsonku = require('./controller');

    app.route('/')
    .get(jsonku.index);
    app.route('/tampil')
    .get(jsonku.tampilsemuamahasiswa);
    app.route('/tambah')
    .post(jsonku.tambahMahasiswa);
}