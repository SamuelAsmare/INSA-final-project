const express = require('express')
const router = express.Router()
const pool = require('./db')

router.get("/gettasks/:email",(req,res)=>{
   query = "select * from tasks where email = ?"
   const email = req.params.email;
   const row = pool.query(query,[email],(err,results)=>{
    if(err){return res.status(500).json({err:"error occured when trying to fetch the data"})}
    return res.status(200).json(results)
   })
})

module.exports = router