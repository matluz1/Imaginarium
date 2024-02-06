function findUser(username, password) {
  const users = [
    {
      username: 'user1',
      password: 'password1',
    },
  ];

  const user = users.find(
    (user) => user.username === username && user.password === password,
  );

  return user;
}

module.exports = {
  findUser,
};
