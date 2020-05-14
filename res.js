'use strict';
exports.ok = function (values, res) {
    var data = {
        'status' : 200,
        'values' : values
    };
    rest.json(data);
    res.end();

};