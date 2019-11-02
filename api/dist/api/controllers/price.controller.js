"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const express = require('express');
const router = express.Router();
router.route('/')
    .get((req, res, next) => {
    res
        .status(200)
        .send('GET /price');
    next();
});
router.route('/recording')
    .get((req, res, next) => {
    req.db.collection('priceRecordings')
        .find({})
        .then((priceRecordings) => {
        res.status(200).send(priceRecordings);
        next();
    });
})
    .post((req, res, next) => {
    req.db.collection('priceRecordings')
        .insertOne(req.body)
        .then((result) => {
        if (result) {
            res.status(201).send();
            next();
        }
        else {
            res.status(500).send();
            next();
        }
    });
});
router.param('recordingId', (req, res, next, id) => {
    if (id.length !== 24 || new RegExp(/[^0-9a-fA-F]/).test(id)) {
        console.error(`Bad request, invalid identifier.`);
        res.status(400).send();
        next();
    }
    else {
        console.log(`Loading recording ${id}...`);
        req.db.collection('priceRecordings')
            .findOne({ _id: mongodb_1.ObjectId.createFromHexString(id) })
            .then((priceRecording) => {
            if (!priceRecording) {
                console.error(`Recording not found.`);
                res.status(404).send();
                next();
            }
            else {
                req.priceRecording = priceRecording;
                next();
            }
        });
    }
});
router.route('/recording/:recordingId')
    .get((req, res, next) => {
    if (req.priceRecording) {
        res.status(200).send('GET /price/recording/' + req.recordingId);
    }
    next();
});
module.exports = router;
