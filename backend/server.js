const express = require('express');
const app = express();
const apiRouter = express.Router();
const cors = require('cors');

const PORT = process.argv[2];

//outside server.js?
function generateRandomString() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';

  for (let i = 0; i < 12; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
}

app.use(cors());

app.get('/', (req, res) => {
  res.send('hello');
});

apiRouter.get('/generateToken', (req, res) => {
  const token = generateRandomString();
  res.json({ token });
});

app.use('/', apiRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
