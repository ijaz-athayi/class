 // server.js
const express = require('express');
const oracledb = require('oracledb');
const cors = require('cors');

const app = express();
const PORT = 5000; // This is your Express app port

app.use(cors());
app.use(express.json());

// Connect to Oracle DB (on port 1522)
async function connectToOracle() {
  try {
    await oracledb.createPool({
      user: 'ijaz',
      password: 'ijaz',
      connectString: 'localhost:1522/orcl' // using your correct port
    });

    console.log('✅ Connected to Oracle DB');
  } catch (err) {
    console.error('❌ Oracle connection error:', err);
  }
}

// Root route for testing the server
app.get('/', (req, res) => {
  res.send('✅ Oracle backend is running 👋');
});

// Route to get data from login table
app.get('/data', async (req, res) => {
  let connection;

  try {
    connection = await oracledb.getConnection();
    const result = await connection.execute('SELECT * FROM login');
    res.json(result.rows);
  } catch (err) {
    console.error('❌ Error executing query:', err);
    res.status(500).send('Internal Server Error: ' + err.message);
  } finally {
    if (connection) await connection.close();
  }
});

app.post('/login', async (req, res) => {
  const { name, email, password } = req.body;
  let connection;

  try {
    connection = await oracledb.getConnection();
    const sql = `INSERT INTO login (name, email, password) VALUES (:name, :email, :password)`;

    const result = await connection.execute(sql, [name, email, password], {
      autoCommit: true,
    });

    res.status(201).json({ message: 'User registered successfully!' });
  } catch (err) {
    console.error('❌ Error inserting user:', err);
    res.status(500).json({ error: 'Internal Server Error: ' + err.message });
  } finally {
    if (connection) await connection.close();
  }
});


// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  connectToOracle(); // initiate Oracle connection pool
});
