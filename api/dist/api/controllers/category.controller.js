"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
router.route('/')
    .get((req, res, next) => res.status(200).send('Hello world!'));
module.exports = router;
