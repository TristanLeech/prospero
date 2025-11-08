import mysql from 'mysql2';

// Create a MySQL connection pool
const pool = mysql.createPool({
    host: process.env.STACKHERO_MYSQL_HOST, // MYSQL_HOST you can also use 127.0.0.1
    user: 'root', // MYSQL_USER
    password: process.env.STACKHERO_MYSQL_ROOT_PASSWORD,
    database: 'prospero', // DEFINE YOUR DATABASE NAME
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0,
}).promise();

// Function to get all notes from the database
export async function getUsers() {
    // Query to select all notes available in your database notes table
    const [rows] = await pool.query("SELECT * FROM users");
    return rows;
}

// Function to get user by email and password
export async function getUser(email, password){
  try{
    const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
  pool.query(sql, [email, password], (err, result) => {
    if (err) {
      res.status(500).json({ message: 'An error occurred while processing your request.' });
    } else {
      if (result.length > 0) {
        res.status(200).json(res.user);
      } else {
        res.status(401).json({ message: 'Login failed. Invalid email or password.' });
      }
    }
  });
  }
  catch (err){
    res.status(500).json({ message: 'An error occurred while processing your request.' });
  }
}

// Function to create new user
export async function CreateUser(username, email, password){
  try{
    const sql = `INSERT INTO users
        (
            Username, Email, Password
        )
        VALUES (?, ?, ?)`;
    const values = [
        username,
        email,
        password
    ];

    pool.query(sql, values, (err, result) => {
        if (err) {
            res.status(500).json({ message: 'An error occurred while processing your request.' });
        } else {
            const insertedId = result.insertId;

            pool.query('SELECT * FROM users WHERE Id = ?', [insertedId], (err, rows) => {
              if (err) {
                res.status(500).json({ message: 'Error fetching created user.' });
              } else {
                res.status(200).json(rows[0]);
              }
            });
        }
    });
  }
  catch (err){
    res.status(500).json({ message: 'An error occurred while processing your request.' });
  }
}

// Function to create new event
export async function CreateEvent(title, rating, colour, notes, userId, date){
  try{
    const sql = `INSERT INTO event
        (
            title, rating, colour, notes, userId, date
        )
        VALUES (?, ?, ?, ?, ?, ?)`;
    const values = [
        title, rating, colour, notes, userId, date
    ];

    pool.query(sql, values, (err, result) => {
        if (err) {
            res.status(500).json({ message: 'An error occurred while processing your request.' });
        } else {
            res.status(200).json(result);
        }
    });
  }
  catch (err){
    res.status(500).json({ message: 'An error occurred while processing your request.' });
  }
}

// Function to create new event
export async function CreateEventDetail(title, rating, colour, notes, userId, isComplete, DueDate){
  try{
    const sql = `INSERT INTO event
        (
            title, rating, colour, notes, userId, isComplete, DueDate
        )
        VALUES (?, ?, ?, ?, ?, ?, ?)`;
    const values = [
        title, rating, colour, notes, userId, isComplete, DueDate
    ];

    pool.query(sql, values, (err, result) => {
        if (err) {
            res.status(500).json({ message: 'An error occurred while processing your request.' });
        } else {
            res.status(200).json(result);
        }
    });
  }
  catch (err){
    res.status(500).json({ message: 'An error occurred while processing your request.' });
  }  
}

// Function to get all events by user
export async function getEventsByUser(userId){
  try{
    const sql = 'SELECT * FROM events WHERE userId = ? ORDER BY date';
  pool.query(sql, [userId], (err, result) => {
    if (err) {
      res.status(500).json({ message: 'An error occurred while processing your request.' });
    } else {
      if (result.length > 0) {
        res.status(200).json(res.events);
      } else {
        res.status(401).json({ message: 'Login failed. Invalid email or password.' });
      }
    }
  });
  }
  catch (err){
    res.status(500).json({ message: 'An error occurred while processing your request.' });
  }
}

// Function to get all eventDetails by user
export async function getEventDetailsByUser(userId){
  try{
    const sql = 'SELECT * FROM eventDetails WHERE userId = ? ORDER BY date';
  pool.query(sql, [userId], (err, result) => {
    if (err) {
      res.status(500).json({ message: 'An error occurred while processing your request.' });
    } else {
      if (result.length > 0) {
        res.status(200).json(res.events);
      } else {
        res.status(401).json({ message: 'Login failed. Invalid email or password.' });
      }
    }
  });
  }
  catch (err){
    res.status(500).json({ message: 'An error occurred while processing your request.' });
  }
}

// Function to get all events by month
export async function getEventsByMonth(startDate, userId){
  try{
    const endDate = new Date(startDate);
    endDate.setMonth(endDate.getMonth() + 1);
    const sql = 'SELECT * FROM events WHERE userId = ? AND date BETWEEN ? AND ? ORDER BY date';
  pool.query(sql, [userId, startDate, endDate], (err, result) => {
    if (err) {
      res.status(500).json({ message: 'An error occurred while processing your request.' });
    } else {
      if (result.length > 0) {
        res.status(200).json(res.events);
      } else {
        res.status(401).json({ message: 'Login failed. Invalid email or password.' });
      }
    }
  });
  }
  catch (err){
    res.status(500).json({ message: 'An error occurred while processing your request.' });
  }
}

// Function to get all events by month
export async function getEventDetailsByMonth(startDate, userId){
  try{
    const endDate = new Date(startDate);
    endDate.setMonth(endDate.getMonth() + 1);
    const sql = 'SELECT * FROM eventDetails WHERE userId = ? AND dueDate BETWEEN ? AND ? ORDER BY dueDate';
  pool.query(sql, [userId, startDate, endDate], (err, result) => {
    if (err) {
      res.status(500).json({ message: 'An error occurred while processing your request.' });
    } else {
      if (result.length > 0) {
        res.status(200).json(res.events);
      } else {
        res.status(401).json({ message: 'Login failed. Invalid email or password.' });
      }
    }
  });
  }
  catch (err){
    res.status(500).json({ message: 'An error occurred while processing your request.' });
  }
}

// Function to get all events by date
export async function getEventsByDate(date, userId){
  try{
    const sql = 'SELECT * FROM events WHERE userId = ? AND date = ? ORDER BY date';
  pool.query(sql, [userId, date], (err, result) => {
    if (err) {
      res.status(500).json({ message: 'An error occurred while processing your request.' });
    } else {
      if (result.length > 0) {
        res.status(200).json(res.events);
      } else {
        res.status(401).json({ message: 'Login failed. Invalid email or password.' });
      }
    }
  });
  }
  catch (err){
    res.status(500).json({ message: 'An error occurred while processing your request.' });
  }
}

// Function to get all event details by date
export async function getEventDetailsByDate(date, userId){
  try{
    const sql = 'SELECT * FROM eventDetails WHERE userId = ? AND dueDate = ? ORDER BY dueDate';
  pool.query(sql, [userId, date], (err, result) => {
    if (err) {
      res.status(500).json({ message: 'An error occurred while processing your request.' });
    } else {
      if (result.length > 0) {
        res.status(200).json(res.events);
      } else {
        res.status(401).json({ message: 'Login failed. Invalid email or password.' });
      }
    }
  });
  }
  catch (err){
    res.status(500).json({ message: 'An error occurred while processing your request.' });
  }
}

//Function to get event by event id
export async function getEventById(eventId){
  try{
    const sql = 'SELECT * FROM events WHERE Id = ?';
  pool.query(sql, [eventId], (err, result) => {
    if (err) {
      res.status(500).json({ message: 'An error occurred while processing your request.' });
    } else {
      if (result.length > 0) {
        res.status(200).json(res.event);
      } else {
        res.status(401).json({ message: 'Login failed. Invalid email or password.' });
      }
    }
  });
  }
  catch (err){
    res.status(500).json({ message: 'An error occurred while processing your request.' });
  }
}

//Function to get event by event id
export async function getEventDetailById(eventId){
  try{
    const sql = 'SELECT * FROM eventDetails WHERE Id = ?';
  pool.query(sql, [eventId], (err, result) => {
    if (err) {
      res.status(500).json({ message: 'An error occurred while processing your request.' });
    } else {
      if (result.length > 0) {
        res.status(200).json(res.event);
      } else {
        res.status(401).json({ message: 'Login failed. Invalid email or password.' });
      }
    }
  });
  }
  catch (err){
    res.status(500).json({ message: 'An error occurred while processing your request.' });
  }
}