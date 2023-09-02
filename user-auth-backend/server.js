const express = require('express');
const sqlite3 = require('sqlite3');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Connect to the SQLite database
const db = new sqlite3.Database('mydb.sqlite');

// Create a users table (if it doesn't exist)
db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    password TEXT NOT NULL
  )
`);

app.use(bodyParser.json());

// Register a new user
app.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    db.run(
      'INSERT INTO users (username, password) VALUES (?, ?)',
      [username, hashedPassword],
      function (error) {
        if (error) {
          return res.status(500).json({ error: 'Error registering user' });
        }
        res.status(201).json({ message: 'User registered successfully' });
      }
    );
  } catch (error) {
    res.status(500).json({ error: 'Error registering user' });
  }
});

// Authenticate user and generate a JWT
app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    db.get('SELECT * FROM users WHERE username = ?', [username], async (error, row) => {
      if (error || !row) {
        return res.status(401).json({ error: 'Authentication failed' });
      }

      const passwordMatch = await bcrypt.compare(password, row.password);
      if (!passwordMatch) {
        return res.status(401).json({ error: 'Authentication failed' });
      }

      const token = jwt.sign({ username }, 'your_secret_key', { expiresIn: '1h' });
      res.json({ token });
    });
  } catch (error) {
    res.status(500).json({ error: 'Error authenticating user' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
