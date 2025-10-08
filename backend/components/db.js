const mysql = require('mysql2')

const pool = mysql.createPool( {
    host : 'mysql-mydatabaseonalwaysdata.alwaysdata.net',
    user : '409473',
    password : 'Sam,@mydatabaseonalwaysdata1219',
    database : 'mydatabaseonalwaysdata_sam', })

pool.getConnection((err,connected)=>{
    if(err){console.log("Error when connecting to the database",err.message); return}
    else{console.log("connected to the data base successfully")}
})

module.exports = pool