const path = require('path');
const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const colors = require('colors');
const connectDB = require('./config/db');

// dotenv.config()
const port = process.env.PORT || 3000;

connectDB();

const app = express();

// add function to use body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/notes', require('./routers/noteRoutes'));
app.use('/api/users', require('./routers/userRoutes'));

// server fontend, it is required when deploy the application
// if (process.env.NODE_ENV === 'production') {
//   // static folder
//   app.use(express.static(path.join(__dirname, '../frontend/build')));
//   app.get('*', (req, res) =>
//     res.sendFile(
//       path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
//     )
//   );
// } else {
//   app.get('/', (req, res) => res.send('Please set production mode'));
// }
// middelware
app.use(errorHandler);

// display information when server connect to MongoDB.
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
