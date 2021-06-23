const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name:String,
    method:String,
    amount:Number,
    
    }, {
        timestamps: true
      });

  
  const recipesSchema = new Schema({
    user:String,
    name:String,
    ingredients:[itemSchema],
    amount:Number,
    method:String,
    notes:String
    }, {
        timestamps: true
      });




      module.exports = mongoose.model('Recipe', recipesSchema);