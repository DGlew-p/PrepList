const mongoose = require('mongoose');


const Schema = mongoose.Schema;


const ingredentsSchema = new Schema({

    description:string,
    amount:	number,
  
});


// const ingredentsSchema = new Schema({
//   AbridgedFoodItem :[{
//     dataType:	string,
//     description:string,
   
//     fdcId:	integer,
  
//     foodNutrients:	[{
//     number:	integer($uint),
  
//     name:	string,
 
//     amount:	number($float),
 
//     unitName: string,

//     derivationCode:	string,
 
//     derivationDescription	:string,
//     }],
//     publicationDate:	string,
    
//     brandOwner	:string,
   
   
//     gtinUpc	:string,
   
  
//     ndbNumber	:string,
   
  
//     foodCode:	string,}]
  
// });








  module.exports = mongoose.model('Ingredient', ingredentsSchema);