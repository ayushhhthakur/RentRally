const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/rentrally.users', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

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
