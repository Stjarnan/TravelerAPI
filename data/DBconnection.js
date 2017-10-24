const express = require('express');
const mongoose = require('mongoose');
let actions = module.exports = {};

const db = mongoose.connection;
let placeSchema = mongoose.Schema({
    destination: String,
    description: String,
    country: String,
    image: String,
    id: Number
});
let place = mongoose.model('place', placeSchema);

function dbConnect() {
    mongoose.connect('mongodb://localhost/TravelerDB', { useMongoClient: true });
};

function dbClose() {
    mongoose.connection.close();
}

actions.getAll = function() {
    dbConnect();
    return new Promise(function(resolve, reject){
        db.once('open', function() {
            place.find(function (err, places) {
                if (err) return console.error(err);
                dbClose();
                resolve(places);
            });
      });
    })// END of promise
} // END of getAll

actions.getByCountry = function(param){
    dbConnect();
    return new Promise(function(resolve, reject){
        db.once('open', function() {
            place.find({"country" : param}).exec(function(err, places) {
                dbClose();
                resolve(places);
              });
            });
      }); // END of promise
    }; // END of getByCountry

actions.getByDestination = function(param){
    dbConnect();
    return new Promise(function(resolve, reject){
        db.once('open', function() {
            place.find({"destination" : param}).exec(function(err, places) {
                dbClose();
                resolve(places);
              });
            });
    }); // END of promise
}; // END of getByDestination