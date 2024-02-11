const express = require('express');
const {
  findUserByEmail,
  createUserByEmailAndPassword,
} = require('./users.services');
const { generateAccessToken } = require('../../utils/jwt');

const router = express.Router();

router.post('/register', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400);
      throw new Error('You must provide an email and a password.');
    }

    const existingUser = await findUserByEmail(email);

    if (existingUser) {
      res.status(400);
      throw new Error('Email already in use.');
    }

    const user = await createUserByEmailAndPassword(email, password);
    const accessToken = generateAccessToken(user.id);

    res.cookie('access_token', accessToken, { httpOnly: true });
    res.send('Successful Sign up');
  } catch (err) {
    next(err);
  }
});

router.get('/protected', async (req, res, next) => {
  console.log('Received HTTP-only cookie:', req.cookies['access_token']);
  res.json({ message: 'hello' });
});

module.exports = router;
