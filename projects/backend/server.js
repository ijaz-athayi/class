const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const User = require('./models/User')

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

  app.get('/', (req, res) => {
    res.json({ message: 'API is working!' });
  });

app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working!' });
});

app.get('/api/users', async (req, res) => {
  res.json({ message: 'this api is working' });
  try {
    const testing = await User.find(); 
    res.json({users});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


