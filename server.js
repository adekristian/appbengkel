const express = require('express');
const bodyParser = require ('body-parser');

var morgan = require('morgan');
const app = express();

// parse apllication/json
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));

//panggilroutes
var routes = require('./routes');
app.use(bodyParser.json());
routes(app);

//daftar menu routes dari index
app.use('/auth', require('./middleware'));

 app.listen(3000, () => {
     console.log(`Server started on port 3000`);
 });
