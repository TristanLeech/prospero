import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.STACKHERO_MYSQL_HOST,
  user: 'root',
  password: process.env.STACKHERO_MYSQL_ROOT_PASSWORD,
  database: 'prospero',
  connectTimeout: 10000,
  ssl: { rejectUnauthorized: false },
});

try {
  const [rows] = await pool.query('SELECT 1 AS test;');
  console.log('✅ Connected! Result:', rows);
} catch (err) {
  console.error('❌ Connection failed:', err.code, err.message);
}
process.exit();
