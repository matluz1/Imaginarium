const bcrypt = require('bcrypt');
const { db } = require('../../utils/db');

function findUserById(id) {
  return db.user.findUnique({
    where: {
      id,
    },
  });
}

function findUserByEmail(email) {
  return db.user.findUnique({
    where: {
      email,
    },
  });
}

function createUserByEmailAndPassword(email, password) {
  const hashedPassword = bcrypt.hashSync(password, 12);
  return db.user.create({
    data: { email, password: hashedPassword },
  });
}

module.exports = {
  findUserById,
  findUserByEmail,
  createUserByEmailAndPassword,
};
