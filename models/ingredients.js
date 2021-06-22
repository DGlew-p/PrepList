const mongoose = require('mongoose');


const Schema = mongoose.Schema;


const ingredientsSchema = new Schema({
    description:String,
    amount:	Number,
},{
  timestamp:true
});


  module.exports = mongoose.model('Ingredient', ingredientsSchema);