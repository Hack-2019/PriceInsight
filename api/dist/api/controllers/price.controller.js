"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
// Record price data
router.post('/', (req, res, next) => {
    req.firestore.collection('prices')
        .add(req.body)
        .then((documentReference) => {
        if (documentReference) {
            res.status(201).send(documentReference);
        }
        else {
            res.sendStatus(500);
        }
        next();
    });
});
// Query prices by UPC
router.get('/upc/:upc', (req, res, next) => {
    console.log(`Loading pricing for UPC ${req.params.upc}...`);
    req.firestore.collection('prices')
        //.where('upc', '==', req.params.upc)
        .getAll()
        .then((querySnapshot) => {
        res.send(querySnapshot);
        next();
    });
});
module.exports = router;
