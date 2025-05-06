const express = require('express');
const oracledb = require('oracledb');
const cors = require('cors');

const app = express();
const PORT = 1522;

app.use(cors());
app.use(express.json());

async function connectToOracle() {
  try {
    await oracledb.createPool({
      user: 'ijaz',
      password: 'ijaz',
      connectString: 'localhost:1522/orcl' // adjust to your Oracle config
    });

    console.log('Connected to Oracle DB');
  } catch (err) {
    console.error('Oracle connection error:', err);
  }
}

 app.get('/', (req, res) => {
     res.send('Oracle backend is running 👋');
   });
// app.get('/', async (req, res) => {
//     let connection;
  
//     try {
//       connection = await oracledb.getConnection();
//       const result = await connection.execute('SELECT * FROM user_tables');
//       res.json(result.rows);
//     } catch (err) {
//       res.status(500).send(err.message);
//     } finally {
//       if (connection) await connection.close();
//     }
//   });
  
app.get('/data', async (req, res) => {
  let connection;

  try {
    connection = await oracledb.getConnection();
    const result = await connection.execute('SELECT * FROM login');
    res.json(result.rows);
  } catch (err) {
    res.status(500).send(err.message);
  } finally {
    if (connection) await connection.close();
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  connectToOracle();
});
