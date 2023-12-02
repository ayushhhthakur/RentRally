// const mongoose = require('mongoose');

<<<<<<< HEAD
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/rentrally.users', {
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
=======
// <<<<<<< backend
// mongoose.connect('mongodb://localhost:27017/rentrally.users', {
// =======
// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/rentrally.users', { // use .env for mongoDB credentials
// >>>>>>> main
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const userSchema = new mongoose.Schema({
//   firstName: String,
//   lastName: String,
//   email: String,
//   password: String,
// });
>>>>>>> 6bb1e56aeb2dd8f3976d48e65bc365127290f825

// const User = mongoose.model('User', userSchema);

<<<<<<< HEAD
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
=======
// module.exports = {
//   User,
//   createUser: async (userData) => {
//     try {
//       const newUser = new User(userData);
//       await newUser.save();
//       console.log('User created successfully');
//       return newUser;
//     } catch (error) {
//       console.error('Error creating user:', error);
//       throw error;
//     }
//   },
//   findUserByEmail: async (email) => {
//     try {
//       return await User.findOne({ email });
//     } catch (error) {
//       console.error('Error finding user by email:', error);
//       throw error;
//     }
//   },
// };
>>>>>>> 6bb1e56aeb2dd8f3976d48e65bc365127290f825
