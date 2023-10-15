const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/rentrally', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a user schema
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

// Export the model and functions for database operations
module.exports = {
  User,
  createUser: async (userData) => {
    try {
      const newUser = new User(userData);
      await newUser.save();
      console.log('User created successfully');
      return newUser;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  },
  findUserByEmail: async (email) => {
    try {
      return await User.findOne({ email });
    } catch (error) {
      console.error('Error finding user by email:', error);
      throw error;
    }
  },
};
