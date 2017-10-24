const express = require('express');
const actions = require('../data/DBconnection.js');
let router = express.Router();
const path = require('path');

// API documentation route
router.get('/api', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

// API base route
router.get('/api/getall', function(req, res){
    async function fetchAll(){
        let data = await actions.getAll();
        res.json(data);
    }
    fetchAll();
});

// API country route
router.get('/api/country/:country', function(req, res){
    async function fetchByCountry(){
        let data = await actions.getByCountry(req.params.country);
        res.json(data);
    }
    fetchByCountry();
});

// API destination route
router.get('/api/destination/:destination', function(req, res){
    async function fetchByDestination(){
        let data = await actions.getByDestination(req.params.destination);
        res.json(data);
    }
    fetchByDestination();
});

module.exports = router;
