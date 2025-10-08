const express = require('express');
const router = express.Router();
const pool = require('./db');

// POST /addusers
router.post('/addusers', (req, res) => {
  const { email, firstName } = req.body;

  const checkQuery = 'SELECT * FROM users WHERE email = ?';
  pool.query(checkQuery, [email], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }

    if (results.length > 0) {
      return res.status(200).json({ message: 'User already exists' });
    }

    const insertQuery = 'INSERT INTO users (email) VALUES (?)';
    pool.query(insertQuery, [email], (insertErr, insertResult) => {
      if (insertErr) {
        return res.status(500).json({ error: 'Insert failed' });
      }

      return res.status(201).json({ message: 'User inserted successfully' });
    });
  });
});

module.exports = router;
