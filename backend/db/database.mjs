import mysql from 'mysql2';

// Create a MySQL connection pool
const pool = mysql.createPool({
    host: 'localhost', // MYSQL_HOST you can also use 127.0.0.1
    user: 'root', // MYSQL_USER
    password: '',
    database: 'prospero' // DEFINE YOUR DATABASE NAME
}).promise();

// Function to get all notes from the database
export async function getUsers() {
    // Query to select all notes available in your database notes table
    const [rows] = await pool.query("SELECT * FROM users");
    return rows;
}

// Function to get user by email and password
export async function getUser(email, password){
  const sql = 'SELECT * FROM Users WHERE email = ? AND password = ?';
  pool.query(sql, [email, password], (err, result) => {
    if (err) {
      res.status(500).json({ message: 'An error occurred while processing your request.' });
    } else {
      if (result.length > 0) {
        res.status(200).json({ message: 'Login successful' });
      } else {
        res.status(401).json({ message: 'Login failed. Invalid email or password.' });
      }
    }
  });
}

// Function to create new user
export async function CreateUser(username, email, password){
    const sql = `INSERT INTO users
        (
            username, email, password
        )
        VALUES (?)`;
    const values = [
        username,
        email,
        password
    ];

    pool.query(sql, values, (err, result) => {
        if (err) {
            res.status(500).json({ message: 'An error occurred while processing your request.' });
        } else {
            res.status(200).json(result);
        }
    });
}

// Function to create new event

// Function to get all events by user