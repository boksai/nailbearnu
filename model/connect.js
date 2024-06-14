const mysql = require('mysql2');

// Create a connection pool to the MySQL database
const connection = mysql.createConnection({
  host: 'localhost', // Change this to your MySQL server host
  user: 'root', // Change this to your MySQL username
  password: 'Phuonghoang@2910', // Change this to your MySQL password
  database: 'quanly', // Change this to your database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Get a connection from the pool
connection.connect(function(err){
  if (err) {
    console.error('Error getting MySQL connection from pool:', err);
    return;
  }
  console.log('Connected to MySQL database')
});

module.exports = connection
