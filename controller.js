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
                response.ok("berhasil menambahkan data", res)
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
};