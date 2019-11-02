"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
// Record price data
router.post('/', (req, res, next) => {
    req.db.collection('prices')
        .insertOne(req.body)
        .then((result) => {
        if (result) {
            res.status(201).send(result);
            next();
        }
        else {
            res.sendStatus(500);
            next();
        }
    });
});
// Query prices by UPC
router.get('/upc/:upc', (req, res, next) => {
    console.log(`Loading pricing for UPC ${req.params.upc}...`);
    req.db.collection('prices')
        .find({ upc: req.params.upc })
        .toArray()
        .then((prices) => {
        console.log(prices);
        res.send(prices);
        next();
    });
});
module.exports = router;
