const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { createUser, findUserByEmail } = require('./db');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/register', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      res.status(400).json({ message: 'A user with the provided email already exists!' });
    } else {
      await createUser({ firstName, lastName, email, password });
      res.status(201).json({ message: 'Registration successful' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
