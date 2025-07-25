const mongoose = require('../connection');

const LibrarySchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: String,
}, {
  timestamps: true, // adds createdAt & updatedAt
});

const libraryDataModel = mongoose.model('Library', LibrarySchema);

module.exports = libraryDataModel;