const express = require('express');
const app = express();
const apiRouter = express.Router();

const PORT = process.argv[2];

const users = [
  {
    username: 'user1',
    password: 'password1',
  },
];

app.use(express.json());

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
    // Convert the expiration time to a Unix timestamp
    const currentTime = new Date();
    const expirationTime = new Date(currentTime.getTime() + 15 * 60000); // 15 minutes * 60 seconds * 1000 milliseconds
    const expUnixTimestamp = Math.floor(expirationTime.getTime() / 1000);
    res.json({
      access_token: {
        userId: 1,
        exp: expUnixTimestamp,
      },
    });
  }
  res.status(401).send('Invalid username or password');
});

apiRouter.get('/protected', (req, res) => {
  res.json({ message: 'hello' });
});

app.use('/', apiRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
