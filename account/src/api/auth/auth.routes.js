const express = require('express');
const bcrypt = require('bcrypt');
const { findUserByEmail } = require('../users/users.services');
const { generateAccessToken } = require('../../utils/jwt');

const router = express.Router();

router.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400);
      throw new Error('You must provide an email and a password.');
    }

    const existingUser = await findUserByEmail(email);

    if (!existingUser) {
      res.status(403);
      throw new Error('Invalid login credentials.');
    }

    const validPassword = await bcrypt.compare(password, existingUser.password);
    if (!validPassword) {
      res.status(403);
      throw new Error('Invalid login credentials.');
    }

    const accessToken = generateAccessToken(existingUser.id);

    res.cookie('access_token', accessToken, { httpOnly: true });
    res.send('Login successful');
  } catch (err) {
    next(err);
  }
});

module.exports = router;
