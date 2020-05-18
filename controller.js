'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req, res){
    response.ok("Aplikasi Res Apiku berjalan", res)
};

//menampilkan data sparepart
exports.tampilsemuasparepart = function(req, res){
    connection.query('SELECT * FROM t_sparepat', function(error, rows, fileds){
        if(error){
            console.log(error);
        }else{
            response.ok(rows, res)
        }

            }
            )};

//menampilkan data sparepart berdasarkan id

exports.tampilberdasarkanid = function(req, res){
    let id = req.params.id;
    connection.query ('SELECT * FROM t_sparepat WHERE id_sparepat = ?', [id], 
    function(error, rows, fileds){
        if(error){
            console.log(error);
        }else{
                response.ok(rows, res);
        }
    }
  );
  };


// menampilkan data montir seluruhnya
exports.tampilsemuamontir = function(req, res){
    connection.query('SELECT * FROM t_montir', function(error, rows, fileds){
        if(error){
            console.log(error);

        }else{
            response.ok(rows, res)
        }
            }
            )};

// menampilkan data montir berdasar id
exports.tampilberdasarkanidmontir = function(req, res){
    let id = req.params.id;
    connection.query ('SELECT * FROM t_montir WHERE id_montir = ?', [id], 
    function(error, rows, fileds){
        if(error){
            console.log(error);

        }else{
                response.ok(rows, res);
        }
    }
  );
  };

  //menambahkan data table servis
  exports.tambahservis = function(req, res){
      var id_servis = req.body.id_servis;
      var tgl_servis = req.body.tgl_servis;
      var id_user = req.body.id_user;
      var id_montir = req.body.id_montir;
      var id_sparepart = req.body.id_sparepart;
      var jumlah_sparepart =  req.body.jumlah_sparepart;

      connection.query('INSERT INTO t_servis (id_servis, tgl_servis,id_user,id_montir,id_sparepart,jumlah_sparepart) VALUES (?,?,?,?,?,?)' , 
      [id_servis, tgl_servis,id_user,id_montir,id_sparepart,jumlah_sparepat],
        function(error, rows,fileds){

            if (error) {
                console.log(error);
            }else{
                response.ok("Berhasil menambahkan data", res)
            }

        }
      )};



      //menginput data di tabel montir
exports.tambahmontir = function(req,res){
    var id_montir = req.body.id_montir;
    var nama_montir = req.body.nama_montir;
    var harga_perjam = req.body.harga_perjam;

    connection.query('INSERT INTO t_montir (id_montir,nama_montir,harga_perjam) VALUES(?,?,?)',
    [id_montir, nama_montir, harga_perjam],
    function (error, rows, fields){
        if(error){
            console.log(error);
        }else {
            response.ok("Berhasil Menambahkan Data Montir!",res)
        }
    });

    //menambahkan data Sparepart
exports.tambahsparepat = function (req, res) {
    var nama_sparepat = req.body.nama_sparepat;
    var harga_sparepat = req.body.harga_sparepat;
    var satuan = req.body.satuan;
    

    connection.query('INSERT INTO t_sparepat (nama_sparepat,harga_sparepat,satuan) VALUES(?,?,?)',
        [nama_sparepat, harga_sparepat,satuan], 
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data Sparepat", res)
            }
        });
};

//input data user
exports.tambahuserku = function (req, res) {
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;
    var role = req.body.role;

    connection.query('INSERT INTO t_user (username,email,password,role) VALUES (?,?,?,?)',
    [username,email,password,role],

        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan User", res);
            }
        });
}

//input data level
exports.tambahlevelku = function (req, res) {
    var nama_level = req.body.nama_level;

    connection.query('INSERT INTO t_level (nama_level) VALUES (?)',
    [nama_level],

        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan User", res);
            }
        });
}
//Mengedit Data Monir berdasarkan id
exports.ubahmontirku = function (req, res) {
    var id_montir = req.body.id_montir;
    var nama_montir = req.body.nama_montir;
    var harga_perjam = req.body.harga_perjam;

    connection.query('UPDATE t_montir SET nama_montir=?, harga_perjam=? WHERE id_montir=?', [nama_montir, harga_perjam, id_montir],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Ubah Data", res)
            }
        });
};

//mengedit data Sparepat
exports.ubahsparepatku = function (req, res) {
    var id_sparepat = req.body.id_sparepat;
    var nama_sparepat = req.body.nama_sparepat;
    var harga_sparepat = req.body.harga_sparepat;
    var satuan = req.body.satuan;

    connection.query('UPDATE t_sparepat SET nama_sparepat=?, harga_sparepat=?, satuan=? WHERE id_sparepat=?', 
    [nama_sparepat, harga_sparepat, satuan, id_sparepat],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Ubah Data", res)
            }
        });
    }
}
