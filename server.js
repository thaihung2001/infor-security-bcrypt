'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const bcrypt= require('bcrypt');
const app         = express();
fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';

app.get('/', (req, res) => {
    res.send("Hello World!");
});
//START_ASYNC -do not remove notes, place code between correct pair of notes.
bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
    bcrypt.compare(myPlaintextPassword, hash,(err, res) => {
    });
});

var hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
console.log(result);
var result = bcrypt.compareSync(myPlaintextPassword, hash);
console.log(result);

//END_ASYNC

//START_SYNC



//END_SYNC





























const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Listening on port:", port)
});