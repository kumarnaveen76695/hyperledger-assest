const mysql = require('mysql2');

// Create a connection to the MySQL database

const connection = mysql.createConnection({
    host: 'localhost',      
    user: 'root',            
    password: '12345',       
    database: 'asset_management' 
});

// Establish the connection

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database!');
});

module.exports = connection;
