import { ObjectId } from "mongodb";
import { PriceRecording } from "../../core/price-recording";

const express = require('express');
const router = express.Router();

router.route('/')
  .get((req: any, res: any, next: any) => {
    res
      .status(200)
      .send('GET /price');
    next();
  });

router.route('/recording')
  .get((req: any, res: any, next: any) => {
    req.db.collection('priceRecordings')
      .find({})
      .then((priceRecordings: PriceRecording[]) => {
        res.status(200).send(priceRecordings);
        next();
      });
  })
  .post((req: any, res: any, next: any) => {
    req.db.collection('priceRecordings')
      .insertOne(req.body)
      .then((result: any) => {
        if (result) {
          res.status(201).send();
          next();
        } else {
          res.status(500).send();
          next();
        }
      });
  });

router.param('recordingId', (req: any, res: any, next: any, id: string) => {
  if (id.length !== 24 || new RegExp(/[^0-9a-fA-F]/).test(id)) {
    console.error(`Bad request, invalid identifier.`);
    res.status(400).send();
    next();
  } else {
    console.log(`Loading recording ${id}...`);
    req.db.collection('priceRecordings')
      .findOne({ _id: ObjectId.createFromHexString(id) })
      .then((priceRecording: PriceRecording) => {
        if (!priceRecording) {
          console.error(`Recording not found.`);
          res.status(404).send();
          next();
        } else {
          req.priceRecording = priceRecording;
          next();
        }
      });
  }
});

router.route('/recording/:recordingId')
  .get((req: any, res: any, next: any) => {
    if (req.priceRecording) {
      res.status(200).send('GET /price/recording/' + req.recordingId);
    }
    next();
  });

module.exports = router;
