// The Cloud Functions for Firebase SDK to create Cloud Functions and triggers.
const { logger } = require("firebase-functions");
const { onRequest } = require("firebase-functions/v2/https");
const { onDocumentCreated } = require("firebase-functions/v2/firestore");

// The Firebase Admin SDK to access Firestore.
const { initializeApp } = require("firebase-admin/app");

initializeApp();

exports.addmessage = onRequest((req, res) => {
  const name = req.params[0];
  const items = { lamp: "This is a lamp", chair: "Good chair" };
  const message = items[name];
  res.json(message);
});
