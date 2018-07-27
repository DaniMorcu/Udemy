const express = require('express');
// const webpush = require('web-push');
const router = express.Router();

// const apiKey = '349541160054.apps.googleusercontent.com';
// const apiKey2 = 'AIzaSyDFt3V7o67EqYE3nWKqWh9AhoypldfSUJI';

// const vapidKeys = webpush.generateVAPIDKeys();

// webpush.setGCMAPIKey(apiKey);

// webpush.setVapidDetails(
//   'mailto:example@yourdomain.org',
//   vapidKeys.publicKey,
//   vapidKeys.privateKey
// );

// const testData = {
//     title: "Testing",
//     body: "It's a success!",
//     icon: "/path/to/an/icon.png"
// };
  
// let subscription;
// let pushIntervalID;
  
router.get('/', (req, res) => {
    res.end('ok');
});

// router.post("/register", (req, res, next) => {
//     subscription = req.body
//     console.log(subscription)
//     res.sendStatus(201)
//     pushIntervalID = setInterval(() => {
//     // sendNotification can only take a string as it's second parameter
//     webpush.sendNotification(subscription, JSON.stringify(testData))
//         .catch(() => clearInterval(pushIntervalID))
//     }, 30000)
// })
  
// router.delete("/unregister", (req, res, next) => {
//     subscription = null
//     clearInterval(pushIntervalID)
//     res.sendStatus(200)
// });

exports.module = router;