import { Price } from "../../core/price";

const express = require('express');
const router = express.Router();

// Record price data
router.post('/', (req: any, res: any, next: any) => {
  req.firestore.collection('prices')
    .add(req.body)
    .then((documentReference: any) => {
      if (documentReference) {
        res.status(201).send(documentReference);
      } else {
        res.sendStatus(500);
      }
      next();
    });
});

// Query prices by UPC
router.get('/upc/:upc', (req: any, res: any, next: any) => {
  console.log(`Loading pricing for UPC ${req.params.upc}...`);
  req.firestore.collection('prices')
    //.where('upc', '==', req.params.upc)
    .getAll()
    .then((querySnapshot: any) => {
      res.send(querySnapshot);
      next();
    });
});

module.exports = router;
