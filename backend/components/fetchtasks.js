const express = require('express')
const router = express.Router()
const pool = require('./db')

// Route to fetch all tasks for a specific user by email
router.get("/gettasks/:email", (req, res) => {
   query = "select * from tasks where email = ?"
   const email = req.params.email;
   const row = pool.query(query, [email], (err, results) => {
       if (err) {
           return res.status(500).json({ err: "Error occurred when trying to fetch the data" })
       }
       return res.status(200).json(results)
   })
})

// Export the router to use in the main server file
module.exports = router
