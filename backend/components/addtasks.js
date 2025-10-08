const express = require("express")
const router = express.Router();
const pool = require('./db')

// Route to add a new task to the database
router.post('/addtask', (req, res) => {
    const { email, title, description, date, priority, completed } = req.body;
    const query = "INSERT INTO tasks (email, title, description, duedate, priority, completed) VALUES (?,?,?,?,?,?)"

    pool.query(query, [email, title, description, date, priority, completed], (err, result) => {
        if (err) {
            console.error("MySQL Error:", err); // Log any database errors
            return res.status(500).json({ error: "Error when entering the data" });
        }
        // Send success response when task is added successfully
        return res.status(200).json(result.message)
    })
})

// Export the router so it can be used in the main server file
module.exports = router
