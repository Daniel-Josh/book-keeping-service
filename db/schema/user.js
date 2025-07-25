const mongoose = require('../connection');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['author','borrower'], required: true },
}, {
  timestamps: true, // adds createdAt & updatedAt
});

const userDataModel = mongoose.model('User', UserSchema);

module.exports = userDataModel;