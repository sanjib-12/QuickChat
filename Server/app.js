const express = require('express');
const morgan = require('morgan');
const app = express();

const authRouter = require('./controllers/authController');
const userRouter = require('./controllers/userController');
const chatRouter = require('./controllers/chatController');
const messageRouter = require('./controllers/messageController');

app.use(morgan('dev'));
app.use(express.json());

//use auth controller router
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/chat', chatRouter);
app.use('/api/message', messageRouter);

module.exports = app;
