const mongoose = require("mongoose");
const Subscription = require("../../models/subscriptions");
mongoose.connect("mongodb://localhost/my_database");

function clear(){
    Subscription.deleteMany().then(function(){
      console.log("Data deleted")  // Success
    }).catch(function(error){
      console.log(error)      // Failure
    });
}

exports.handler = async function clearDB(event, context){
  try {
    await clear();
    return console.log("DB cleared")
  } catch (error) {
    console.error(error);
  }
}