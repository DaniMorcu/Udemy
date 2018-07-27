const express = require('express');
const routes = require('./routes');
const morgan = require('morgan');
const webpush = require('web-push');
const router = express.Router();

const app = express();

app.set('app', 'lab');

app.use(morgan('dev'));

const apiKey = '349541160054.apps.googleusercontent.com';
const apiKey2 = 'AIzaSyDFt3V7o67EqYE3nWKqWh9AhoypldfSUJI';
const apiKey3 = 'AAAAfNvJvMc:APA91bG_8rQQv_W24FaNH-Es8oGnBWM1BvLrcdXCi8vXWGAcUH79uwyg9egNFX0zIec-r37q1YEgNYmUd5-FBw-xNBVnu5kM2Q2lA61EFGw4uk94ZV0iJflSjLh55G6ZfvIQ_GhZnscT7FLCTa37d3eM1bIAUGgVYw';
const vapidKeys = webpush.generateVAPIDKeys();

webpush.setGCMAPIKey(apiKey3);

webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

const testData = {
    title: "Testing",
    body: "It's a success!"
};
  
let subscription = {
    'endpoint': 'http://localhost:3000',
}
let pushIntervalID;
  
router.get('/', (req, res) => {
    res.end('ok');
});

router.post("/register", (req, res, next) => {
    //subscription = req.body
    console.log(subscription);
    res.sendStatus(201)
    pushIntervalID = setInterval(() => {
    // sendNotification can only take a string as it's second parameter
    webpush.sendNotification(subscription, JSON.stringify(testData))
        // .catch(() => clearInterval(pushIntervalID))
        .catch(err => console.error(err));
    }, 30000)
})
  
// router.delete("/unregister", (req, res, next) => {
//     subscription = null
//     clearInterval(pushIntervalID)
//     res.sendStatus(200)
// });

app.use(router);

app.listen(3000, () => console.log('Init'));