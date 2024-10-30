const mongoose = require('mongoose');


const connectDB = async function main() {
  await mongoose.connect('mongodb+srv://user1:UBLwXoJbi8CMtFiN@cluster0.rj19e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
  
  console.log('Database Connected Successfully');
  
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}


module.exports = connectDB;
