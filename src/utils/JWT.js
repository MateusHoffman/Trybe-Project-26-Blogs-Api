require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const generateToken = (name, email) => {
  const payload = { name, email };
  const token = jwt.sign(payload, secret);
  return token;
};

module.exports = {
  generateToken,
  // authenticateToken,
};