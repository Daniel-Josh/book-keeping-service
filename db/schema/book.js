const mongoose = require('../connection');

const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  coverImage: String,      // Firebase URL
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  library: { type: mongoose.Schema.Types.ObjectId, ref: 'Library' },
  borrower: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
  borrowedAt: Date,
}, {
  timestamps: true, // adds createdAt & updatedAt
});    

module.exports = mongoose.model('Book', BookSchema);