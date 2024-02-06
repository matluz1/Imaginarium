const express = require('express');
const router = express.Router();

router.get('/protected', async (req, res, next) => {
  console.log('Received HTTP-only cookie:', req.cookies['access_token']);
  res.json({ message: 'hello' });
});

module.exports = router;
