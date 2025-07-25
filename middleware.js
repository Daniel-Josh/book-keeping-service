const jwt = require('jsonwebtoken');
const client = require('./redis/connection');

exports.issueTokens = (user) => {
    try {
  const accessToken = jwt.sign({ id: user.id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
  const refreshToken = jwt.sign({ id: user.id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });
  client.set(user.id, refreshToken, 'EX', 7 * 24 * 3600); // expire in Redis
  return { accessToken, refreshToken };
    } catch (error) {
        console.log("error in issueTokens",error);
        throw error
    }
};

exports.verifyRefresh = (token) => {
    try {
  const payload = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
  return new Promise((resolve, reject) => {
    client.get(payload.id, (err, stored) => {
      if (err || stored !== token) return reject();
      resolve(payload);
    });
  });
      } catch (error) {
        console.log("error in verifyRefresh",error);
        throw error
    }
};
