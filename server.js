const express = require('express');
const bodyParser = require ('body-parser');
const app = express ();

// parse apllication/json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//panggilroutes
var routes = require('./routes');
routes(app);
     
 app.listen(3000, () => {
     console.log(`Server started on port`);
 });