import express = require('express');
import { MongoClient } from "mongodb";
const { Firestore } = require('@google-cloud/firestore');

const cors = require('cors');
const priceController = require('./controllers/price.controller');

const API_PORT = 8080;

// Create a new client
let firestore = new Firestore({ projectId: 'hackisu-2019-priceinsight', keyFilename: 'gcloud-credentials.json' });

// Create a new express application instance
const app: express.Application = express();

// Database initialization routine
const initializeDatabase = (callback: (err: any) => void) => {
  console.group('Initializing application database');
};

// Allow for processing of POSTed JSON into request.body
app.use(express.json());

// Allow requests from other domains
app.use(cors());

// Middleware for request timing and debug
app.use((req: any, res: any, next: any) => {
  console.group(`Handling request at ${new Date().toLocaleTimeString()} for ${req.url}...`);
  req.startedAt = new Date();
  req.firestore = firestore;
  next();
});

// Register API endpoints
app.use('/price', priceController);

// Middleware for request debug of timing
app.use((req: any, res: any, next: any) => {
  const secondsToProcess = (new Date().getTime() - req.startedAt.getTime()) / 1000;
  console.log(`Request completed with code ${res.statusCode} in ${secondsToProcess} seconds.`);
  console.groupEnd();
  next();
});

// Initialize database, and open server listener
app.listen(API_PORT, function () {
  console.log(`API web service started on port ${API_PORT}.`);
});
