var mysql = require('mysql');

//buat koneksi database

const conn =  mysql.createConnection({
host :'localhost',
user:'root',
password:'',
database:'restapi'
});

conn.connect((err)=>{
    if(err) throw err;
    Console.log ("mysql terkoneksi");
});
module.exports = conn;