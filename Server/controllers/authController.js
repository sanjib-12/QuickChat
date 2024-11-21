/* eslint-disable no-undef */
const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('./../models/user');

//Handeling singup request.
router.post('/signup', async (req, res) => {
   try {
      //1. Check whether user already exit or not.
      const user = await User.findOne({ email: req.body.email });

      //2. If user exits, send an error response
      if (user) {
         return res.send({
            message: 'User already exists.',
            success: false,
         });
      }

      //3. Encrypt the password
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      req.body.password = hashedPassword;

      //4. Create a new User and save it in the DB
      const newUser = new User(req.body);
      await newUser.save();

      res.status(201).send({
         message: 'user Created Successfully!',
         success: true,
         newUserData: {
            user: req.body,
         },
      });
   } catch (error) {
      res.send({
         message: error.message,
         success: false,
      });
   }
});

//Handling login request.
router.post('/login', async (req, res) => {
   try {
      //1. Check if user exists and if not, terminate the function.
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
         return res.send({
            message: 'User does not exist!',
            success: false,
         });
      }

      //2. check if the password is correct and if not, terminate the function.
      const isValid = await bcrypt.compare(req.body.password, user.password);
      if (!isValid) {
         return res.send({
            message: 'Invalid Password.',
            success: false,
         });
      }

      //3. If the user exists and password is correct , assign a jwt
      const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
         expiresIn: '1d',
      });

      return res.send({
         message: 'User Logged-in Successfully.',
         success: true,
         token: token,
      });
   } catch (error) {
      res.send({
         message: error.message,
         success: false,
      });
   }
});

module.exports = router;
