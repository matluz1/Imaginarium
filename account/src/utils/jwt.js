const jwt = require('jsonwebtoken');

function generateAccessToken(userId) {
  const key = process.env.JWT_SECRET_KEY;
  const base64Key = Buffer.from(key, 'base64');
  const options = {
    expiresIn: '15m',
    algorithm: process.env.JWT_ALGORITHM,
    keyid: process.env.JWT_KEYID,
    header: { typ: undefined },
  };

  return jwt.sign({ userId }, base64Key, options);
}

module.exports = {
  generateAccessToken,
};
