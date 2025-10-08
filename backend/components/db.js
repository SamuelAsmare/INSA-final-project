const mysql = require('mysql2');

// Create a connection pool to the MySQL database
const pool = mysql.createPool({
    host: 'mysql-mydatabaseonalwaysdata.alwaysdata.net',  
    user: '409473',                                        
    password: 'Sam,@mydatabaseonalwaysdata1219',          
    database: 'mydatabaseonalwaysdata_sam',               
});

// Test the connection to ensure the database is reachable
pool.getConnection((err, connected) => {
    if (err) {
        // If connection fails, log the error message
        console.log("Error when connecting to the database:", err.message);
        return;
    } else {
        // If connection succeeds, log a success message
        console.log("Connected to the database successfully");
    }
});

// Export the pool so it can be used in other files for queries
module.exports = pool;
