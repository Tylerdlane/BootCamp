const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Creating a userSchema 
const userSchema = new Schema({
  username: { type: String, required: true },
  // List of followers (references to other users)
  // The Schema.Types.ObjectId is used to refernce documents in other collections
  followers: [{ type: Schema.Types.ObjectId, ref: 'User' }], 
  // List of messages posted by the user (references to messages)
  messages: [{ type: Schema.Types.ObjectId, ref: 'Message' }] 
});

// Creating a messageSchema
const messageSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  // Date.now will give us the time the document is created 
  timestamp: { type: Date, default: Date.now },
  // Reference to the user who posted the message
  user: { type: Schema.Types.ObjectId, ref: 'User' } 
});

// Create models for User and Message schemas
const UserModel = mongoose.model('User', userSchema);
const MessageModel = mongoose.model('Message', messageSchema);

module.exports = { UserModel, MessageModel };