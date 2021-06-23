const mongoose = require('mongoose');
const Schema = mongoose.Schema;



    const prepListsSchema = new Schema({
      name:String,
      note:[String],
      }, {
          timestamps: true
        });


const usersSchema = new Schema({
name: String,
email: String,
preplist:[prepListsSchema],
googleId: String
}, {
    timestamps: true
  });



module.exports = mongoose.model('User', usersSchema);