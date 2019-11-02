import { ObjectId } from "mongodb";
import { Price } from "../../core/price";

const express = require('express');
const router = express.Router();

// Record price data
router.post('/', (req: any, res: any, next: any) => {
  req.db.collection('prices')
    .insertOne(req.body)
    .then((result: any) => {
      if (result) {
        res.status(201).send({
          _id: result.insertedId
        });
        next();
      } else {
        res.sendStatus(500);
        next();
      }
    });
});

// Query prices by UPC
router.get('/upc/:upc', (req: any, res: any, next: any) => {
  console.log(`Loading pricing for UPC ${req.params.upc}...`);
  req.db.collection('prices')
    .find({ upc: req.params.upc })
    .toArray()
    .then((prices: Price[]) => {
      res.send(prices);
      next();
    });
});

module.exports = router;
