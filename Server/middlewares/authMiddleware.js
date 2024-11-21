/* eslint-disable no-undef */
const jwt = require('jsonwebtoken');
// Below middleware function takes the token and verify using the secret key
// if the token is not vaild or expired it throw the error.
// if the token is valid the the userID is extracted from the token and added to the request body.
// after the success the next middleware is called.
module.exports = (req, res, next) => {
   try {
      const token = req.headers.authorization.split(' ')[1];

      const decodedToken = jwt.verify(token, process.env.SECRET_KEY);

      req.body.userId = decodedToken.userId;
      next();
   } catch (error) {
      res.send({
         message: error.message,
         success: false,
      });
   }
};
