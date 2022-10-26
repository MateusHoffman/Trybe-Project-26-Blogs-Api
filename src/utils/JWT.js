require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const generateToken = (name, email) => {
  const payload = { name, email };
  const token = jwt.sign(payload, secret);
  return token;
};

const authenticateToken = (token) => {
  try {
    jwt.verify(token, secret);
    return true;
   } catch (error) {
     return false;
   }
 };

module.exports = {
  generateToken,
  authenticateToken,
};