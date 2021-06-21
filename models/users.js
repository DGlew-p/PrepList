const mongoose = require('mongoose');
const Ingredient = require("../models/ingredients");
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;


const recipesSchema = new Schema({
  name:String,
  ingredients:[{Ingredient, amount:Number}],
  amount:Number,
  Method:String,
  notes:[String],
  }, {
      timestamps: true
    });

    const prepListsSchema = new Schema({
      name:String,
      recipes:[recipesSchema],
      notes:[String],
      }, {
          timestamps: true
        });


const usersSchema = new Schema({
recipes:[recipesSchema],
preplists:[prepListsSchema],
googleId: String
}, {
    timestamps: true
  });



module.exports = mongoose.model('User', usersSchema);