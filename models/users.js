const mongoose = require('mongoose');
const Ingredient = require("../models/ingredients").schema;
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name:String,
  method:String,
  nutrition:[Ingredient],
  amount:Number,
  }, {
      timestamps: true
    });



const recipesSchema = new Schema({
  name:String,
  ingredients:[itemSchema],
  amount:Number,
  method:String,
  notes:String
  }, {
      timestamps: true
    });

    const prepListsSchema = new Schema({
      name:String,
      recipe:[recipesSchema],
      note:[String],
      }, {
          timestamps: true
        });


const usersSchema = new Schema({
name: String,
email: String,
recipe:[recipesSchema],
preplist:[prepListsSchema],
googleId: String
}, {
    timestamps: true
  });



module.exports = mongoose.model('User', usersSchema);