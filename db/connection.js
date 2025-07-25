const mongoose = require('mongoose');
//connect to mongoDB
mongoose
  .connect("mongodb+srv://danieljosh:danielsMongoDBPassword@cluster0.z6af1.mongodb.net/test2?retryWrites=true&w=majority")
  .then(() => {
    console.log("connected to mongoDB");
  })
  .catch((error) => {
    console.log(`error connecting mongoDB: ${error}`);
  });

module.exports = mongoose;