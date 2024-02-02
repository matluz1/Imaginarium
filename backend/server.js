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
    res.json({
      access_token: {
        userId: 1,
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
