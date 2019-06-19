//
// Main application for Alexa skill requests
//

const express = require('express');
const ssmlCheck = require('ssml-check');
// const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const prerender = require('prerender-node');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(prerender.set('prerenderServiceUrl', 'http://localhost:1337/'));

var redis = require("redis"),
	client = redis.createClient();

prerender.set('beforeRender', function(req, done) {
  req.url = 'a' + req.url;
	client.get(req.url, done);
}).set('afterRender', function(err, req, prerender_res) {
	client.set(req.url, prerender_res.body)
});

app.get('/ssml', (req, res, next) => {
  console.log(req.headers['user-agent']);
  const options = {
    platform: (req.query.platform) ? req.query.platform : 'all',
    validateAudioFiles: req.query.validateAudioFiles,
  };

  ssmlCheck.verifyAndFix(req.query.ssml, options).then((result) => {
    res.json(result);
  });
});

app.get('*', (req, res, next) => {
  // Unhandled
  console.log('Got unknown get ' + req.params[0]);
  res.json({error: 'Unhandled'});
});

module.exports = app;
