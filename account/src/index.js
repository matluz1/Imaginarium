const app = require('./app');

const port = process.env.ACCOUNT_PORT;
app.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`);
});
