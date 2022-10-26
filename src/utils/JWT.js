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
    const objUser = jwt.verify(token, secret);
    return { isValidToken: true, objUser };
   } catch (error) {
     return false;
   }
 };

module.exports = {
  generateToken,
  authenticateToken,
};