const express = require('express')
const router = express.Router()
const pool = require('./db')

// Route to delete a task by its ID
router.delete("/deletetask/:id", (req, res) => {
    const query = "delete from tasks where id = ?"
    const id = req.params.id;
    pool.query(query, [id], (err, deleted) => {
        if (err) {
            return res.status(500).json({ err: "Error occurred when deleting the data at the backend" })
        }
        return res.status(200).json({ message: "Task deleted successfully" })
    })
}) 

// Export the router so it can be used in the main server file
module.exports = router
