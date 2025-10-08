const express = require('express')
const router = express.Router()
const pool = require('./db')

router.delete("/deletetask/:id" , (req,res)=>{
const query = "delete from tasks where id = ?"
const id =  req.params.id;
pool.query(query,[id] ,(err,deleted)=>{
    if(err){return res.status(500).json({err:"error occured when delting the data at the backend"})}
    return res.status(200).json({message:"Task deleted successfully"})
})
}) 

module.exports = router