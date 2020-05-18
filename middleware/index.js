var express = require('express');
var auth = require('./auth');
var router = express.Router();
var verifikasi = require('./verifikasi');

router.post('/api/v1/register', auth.registrasi);
router.post('/api/v1/login', auth.login);

//alamat yang perlu otorisasi
router.get('/api/v1/rahasia', verifikasi(), auth.halamanrahasia)

// menambah, mengubah data user
router.post('/api/v1/tambahuser',verifikasi(), auth.tambahuser);
router.put('/api/v1/ubahuser',verifikasi(), auth.ubahuser);
router.delete('/api/v1/hapususer',verifikasi(), auth.hapususer);

//mengubah menghapus dan menambah data level
router.put('/api/v1/ubahlevel',verifikasi(), auth.ubahlevel);
router.delete('/api/v1/hapusLevel',verifikasi(), auth.hapusLevel);
router.post('/api/v1/tambahlevel',verifikasi(), auth.tambahlevel);

//mengubah menambah dan menghapus data servis
router.put('/api/v1/ubahservis',verifikasi(), auth.ubahservis);
router.post('/api/v1/tambahservis',verifikasi(),auth.tambahservis);
router.delete('/api/v1/hapusservis',verifikasi(), auth.hapusservis);

//menambah mengubah dan menghapus data sparepat
router.post('/api/v1/tambahsparepat',verifikasi(), auth.tambahsparepat);
router.put('/api/v1/ubahsparepat',verifikasi(), auth.ubahsparepat);
router.delete('/api/v1/hapussparepat',verifikasi(), auth.hapussparepat);

//menambah, mengubah, dan menghapus datamonir
router.post('/api/v1/tambahmontir',verifikasi(), auth.tambahmontir);
router.put('/api/v1/ubahmontir',verifikasi(), auth.ubahmontir);
router.delete('/api/v1/hapusmontir',verifikasi(), auth.hapusmontir);

//hitung
router.get('/api/v1/totalservis',verifikasi(), auth.totalservis);

module.exports = router;