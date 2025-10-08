const express = require("express")
const router = express.Router();
const pool =  require('./db')

router.post('/addtask',(req,res)=>{
    const {email,title,description,date,priority,completed} = req.body;
    const query = "Insert into tasks (email,title,description,duedate,priority,completed) values (?,?,?,?,?,?)"
    pool.query(query,[email,title,description,date,priority,completed],(err,result)=>{
        if (err) {
  console.error("MySQL Error:", err); // 👈 ADD THIS
  return res.status(500).json({ error: "Error when entering the data" });
}
        return res.status(200).json(result.message)
    })
})

module.exports = router