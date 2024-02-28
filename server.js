'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const bcrypt = require('bcrypt');
const app         = express();
fccTesting(app);
const saltRounds = 12;
/* const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123'; */


app.post('/hash', (req, res) => {
  const plaintextPassword = 'sUperpassw0rd!';

  // Hash the password using BCrypt
  bcrypt.hash(plaintextPassword, saltRounds, (err, hash) => {
    if (err) {
      console.error('Error hashing password:', err);
      res.status(500).send('Internal Server Error');
    } else {
      // Send the hashed password to the client or store it in the database
      res.send('Hashed Password: ' + hash);
    }
  });
});

//START_ASYNC -do not remove notes, place code between correct pair of notes.



//END_ASYNC

//START_SYNC



//END_SYNC





























const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Listening on port:", PORT)
});
