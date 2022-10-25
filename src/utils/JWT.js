require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

// const jwtConfig = {
//   // expiresIn: '15m', // 1s, 1m, 1h 
//   algorithm: 'HS256',
// };

const generateToken = (name, email) => {
  console.log(name, email);
  const payload = { name, email };
  const token = jwt.sign(payload, secret);
  return token;
};

module.exports = {
  generateToken,
  // authenticateToken,
};