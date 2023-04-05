const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
} = require('../controller/userController');

const { protect } = require('../middleware/authMiddleware');

router.post('/', registerUser); // use to registe new user
router.post('/login', loginUser); // use to login
router.get('/get-users', getMe);

module.exports = router;
