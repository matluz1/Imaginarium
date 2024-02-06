const express = require('express');
const { generateAccessToken } = require('../../utils/jwt');
const { findUser } = require('../users/users.services');
const router = express.Router();

router.post('/login', async (req, res, next) => {
  try {
    console.log(req.body);
    const { username, password } = req.body;
    const user = findUser(username, password);
    if (user) {
      const accessToken = generateAccessToken();

      res.cookie('access_token', accessToken, { httpOnly: true });
      res.send('Login successful');
    } else {
      res.status(401).send('Invalid username or password');
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
