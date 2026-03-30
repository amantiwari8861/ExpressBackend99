const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;

// hash password
exports.hashPassword = async (plainPassword) => {
  return await bcrypt.hash(plainPassword, SALT_ROUNDS);
};

// compare password
exports.comparePassword = async (plainPassword, hashedPassword) => {
  return await bcrypt.compare(plainPassword, hashedPassword);// 1234 <-> $2b$10$...
};
