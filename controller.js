'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req, res){
    response.ok("Aplikasi Res Apiku berjalan", res)
};

//menapilkan data mahasiswa

exports.tampilsemuamahasiswa = function(req,res){
connection.query('SELECT * FROM mahasiswa', function(error, rows, fileds){
    if (error){
        connection.log(error);

    }
    else{
        response.ok(rows, res)
    }
});
};


//menambahkan data mahasiswa

exports.tambahMahasiswa = function(req,res){
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    connection.query('INSERT INTO mahasiswa (nim,nama,jurusan) VALUES(?,?,?)',
    [nim, nama, jurusan],
    function (error, rows, fileds){
        if (error){
        Console.log(error);
    }
    else {
        response.ok("Berhasil Menambahkan data",res)
    }
});
};