'use strict';
const express = require('express');
const bcrypt = require('bcrypt');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/hash', (req, res) => {
  const myPlaintextPassword = req.body.password;
  const saltRounds = 13;

  // Hash the password asynchronously
  bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
    if (err) {
      console.error('Error hashing password:', err);
      res.status(500).send('Internal Server Error');
    } else {
      // Log the completed hash to the console
      console.log('Hashed Password:', hash);

      // Compare the hashed password with a new input
      bcrypt.compare(myPlaintextPassword, hash, (err, compareResult) => {
        if (err) {
          console.error('Error comparing passwords:', err);
          res.status(500).send('Internal Server Error');
        } else {
          // Log the comparison result to the console
          console.log('Comparison Result:', compareResult);
          res.send('Hashed and compared successfully!');
        }
      });
    }
  });
});
//END_SYNC





























const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Listening on port:", PORT)
});
