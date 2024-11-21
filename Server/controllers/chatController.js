const router = require('express').Router();
const authMiddleware = require('./../middlewares/authMiddleware');
const Chat = require('./../models/chat');

// the below route handler uses middlerware for authentication.
// creates a chat instance using mongoose model.
// saves the chat to the database and return the promise.
// if success response with 201 which means new resources have been created.
// if not error is thrown.
router.post('/create-new-chat', authMiddleware, async (req, res) => {
   try {
      const chat = new Chat(req.body);
      const savedChat = await chat.save();

      res.status(201).send({
         message: 'Chat created successfully.',
         success: true,
         data: savedChat,
      });
   } catch (error) {
      res.status(400).send({
         message: error.message,
         success: false,
      });
   }
});

//the below route handler returns all the chats of the current loged-in user.
router.get('/get-all-chats', authMiddleware, async (req, res) => {
   try {
      // gets all the chats form the database using the user ID.
      const allChat = await Chat.find({ members: { $in: req.body.userId } });

      // response with the success and the chats information.
      res.status(200).send({
         message: 'Chat fetched successfully.',
         success: true,
         data: allChat,
      });
   } catch (error) {
      res.status(400).send({
         message: error.message,
         success: false,
      });
   }
});

module.exports = router;
