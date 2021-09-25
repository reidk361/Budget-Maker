// const serverless = require("serverless-http");
const express = require("express");
// const app = express();
// const axios = require("axios");
const mongoose = require("mongoose");
const Subscription = require("../../models/subscriptions");
mongoose.connect("mongodb://localhost/my_database");

exports.handler = async function findSub(event, context) {
  try {
    const eventBody = JSON.parse(event.body);
    const reqSub = await Subscription.find({ brand: eventBody.brand }).exec();
    return {
        statusCode: 200,
        body: JSON.stringify({
            reqSub,
        })
    };
  } catch (error) {
    console.error(error);
  }
};
