const mongoose = require('mongoose');

const messageSchema = mongoose.Schema(
   {
      chatId: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'chats',
      },
      sender: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'user',
      },
      text: {
         type: String,
         required: true,
      },
      read: {
         type: Boolean,
         default: false,
      },
   },
   { timestamps: true }
);

module.exports = mongoose.model('messages', messageSchema);
