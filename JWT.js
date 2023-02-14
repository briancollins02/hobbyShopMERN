// Other files need to require this in order to sign the web token

const { authMiddleware } = require('./utils/auth');



// const jwt = require('jsonwebtoken');

// const secret = 'mysecretssshhhhhhh';
// const expiration = '2h';

// module.exports = {
//   signToken: function ({ email, username, _id }) {
//     const payload = { email, username, _id };
//     return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
//   },
// };

// Next step is to add the const token = signToken(pass in the user) to get authentication going.

