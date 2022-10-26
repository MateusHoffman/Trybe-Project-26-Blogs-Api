const { authenticateToken } = require('../utils/JWT');

const auth = async (req, res, next) => {
  const token = req.header('authorization');
  console.log('token', token);
  if (!token) return res.status(401).json({ message: 'Token not found' });
  const isValidToken = authenticateToken(token);
  console.log('token', isValidToken);
  if (!isValidToken) return res.status(401).json({ message: 'Expired or invalid token' });
  next();
};

module.exports = { auth };