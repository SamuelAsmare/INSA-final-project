const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')
const app = express()
const pool = require('./components/db')
app.use(cors())
app.use(express.json())

const deleteUnvarifiedUsers = require("./components/deleteUnvarifiedUsers")

deleteUnvarifiedUsers(60)


app.use('/api' , require('./components/addusers'))
app.use('/api',require('./components/addtasks'))
app.use('/api',require('./components/fetchtasks'))
app.use('/api',require("./components/deletetsk"))

const port = process.env.port || 6008
app.listen(port,()=>
console.log(`the server is running at ${port} , hi sam`)
)