export {};
const express = require('express');
const router = express.Router();

router.route('/')
  .get((req: any, res: any, next: any) =>
    res.status(200).send('Hello world!'));

module.exports = router;
