const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/my_database");

const Schema = mongoose.Schema;

const schema = new Schema({
  brand: String,
  title: String,
  cost: NumberDecimal(),
  level: Number
});

const Subscription = mongoose.model("Subscription", schema);

function seed(){
  Subscription.insertMany([
    { brand: 'Hulu', title: 'Basic', cost: 5.99, level: 1},
    { brand: 'Hulu', title: 'No Ads', cost: 11.99, level: 2},
    { brand: 'Hulu', title: 'Hulu Live', cost: 64.99, level: 3},
    { brand: 'Hulu', title: 'Hulu Live, No Ads', cost: 70.99, level: 4},
    { brand: 'Netflix', title: 'Basic', cost: 8.99, level: 1},
    { brand: 'Netflix', title: 'Standard', cost: 13.99, level: 2},
    { brand: 'Netflix', title: 'Premium', cost: 17.99, level: 3},
    { brand: 'Disney Plus', title: 'Monthly', cost: 7.99, level: 1},
    { brand: 'Disney Plus', title: 'Annual', cost: 6.67, level: 1},
    { brand: 'Disney Plus', title: 'Hulu Bundle', cost: 13.99, level: 2},
    { brand: 'Disney Plus', title: 'Hulu No Ads Bundle', cost: 19.99, level: 3},
    { brand: 'Disney Plus', title: 'Hulu Live Bundle', cost: 72.99, level: 4},
    { brand: 'Disney Plus', title: 'Hulu Live No Ads Bundle', cost: 78.99, level: 5},
    { brand: 'YouTube', title: 'Premium', cost: 11.99, level: 1},
    { brand: 'YouTube', title: 'Family', cost: 17.99, level: 2},
    { brand: 'YouTube', title: 'TV', cost: 64.99, level: 3},
    { brand: 'Amazon', title: 'Prime', cost: 12.99, level: 1},
    { brand: 'Audible', title: 'Plus', cost: 7.95, level: 1},
    { brand: 'Apple', title: 'TV Plus', cost: 4.99, level: 1},
    { brand: 'Apple', title: 'One', cost: 14.95, level: 2},
    { brand: 'Spotify', title: 'Premium', cost: 9.99, level: 1},
    { brand: 'Spotify', title: 'Duo', cost: 12.99, level: 2},
    { brand: 'Spotify', title: 'Family', cost: 15.99, level: 3},
    { brand: 'PlayStation', title: 'Plus', cost: 9.99, level: 1},
    { brand: 'Xbox', title: 'Live Gold', cost: 9.99, level: 1},
    { brand: 'SoundCloud', title: 'Go', cost: 9.99, level: 1},
  ]).then(function(){
    console.log("Data inserted")  // Success
  }).catch(function(error){
    console.log(error)      // Failure
  });
}



module.exports = Subscription;