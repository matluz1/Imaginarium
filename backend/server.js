const express = require('express');
const app = express();
const apiRouter = express.Router();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const PORT = process.env.BACKEND_PORT;

const users = [
  {
    username: 'user1',
    password: 'password1',
  },
];

app.use(cookieParser());
app.use(express.json());

function generateAccessToken() {
  const key = process.env.JWT_SECRET_KEY;
  const base64Key = Buffer.from(key, 'base64');
  const options = {
    expiresIn: '15m',
    algorithm: 'HS256',
    keyid: 'sim2',
    header: { typ: undefined },
    noTimestamp: true,
  };

  return jwt.sign({ userId: 1 }, base64Key, options);
}

app.get('/', (req, res) => {
  res.send('hello');
});

app.post('/login', (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;
  const user = users.find(
    (user) => user.username === username && user.password === password,
  );
  if (user) {
    const accessToken = generateAccessToken();

    res.cookie('access_token', accessToken, { httpOnly: true });
    res.send('Login successful');
  } else {
    res.status(401).send('Invalid username or password');
  }
});

apiRouter.get('/protected', (req, res) => {
  res.json({ message: 'hello' });
});

app.use('/', apiRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
