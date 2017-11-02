require('./config/config');
const fallback = require('express-history-api-fallback');
const express = require('express');

const { minutes } = require('./utils');
const { getTweets } = require('./tweet-getter/tweet-getter');

const { mongoose } = require('./tweet-getter/mongoose');
const { Tweet } = require('./tweet-getter/save-tweets');

const app = express();
const port = process.env.PORT;
const root = __dirname + './../public';

getTweets();

// setInterval(() => {
//   request.then((data) => {
//     console.log(data);
//   });
// }, minutes(20));

app.use(express.static(root));
// app.use(fallback('index.html', { root }));

app.get('/tweet/:id', (req, res) => {
  const tweet = req.params
});

app.get('/tweets/latest', (req, res) => {

  res.set({
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  })

  Tweet.findOne({}, {}, { sort: { 'created_at' : -1 } }, function(err, post) {
  }).then((currentTweet) => {
    if(!currentTweet) {
      return res.status(404).send();
    }

    Tweet.findOne({
      count: currentTweet.count - 1
    }).then((prevTweet) => {
      res.send({currentTweet, prevTweet});
    }, (err) => {
      res.status(400).send();
    })

    // res.send({currentTweet});
  }, (err) => {
    res.status(400).send();
  });
});

app.get('/tweets/i/:count', (req, res) => {
  const count = req.params.count;

res.set({
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
})

  Tweet.findOne({
    count: count
  }).then((tweet) => {
    if(!tweet) {
      return res.status(404).send();
    }

    res.send({tweet});
  }, (err) => {
    res.status(400).send();
  });
});

app.get('/tweets/id/:id', (req, res) => {
  const id = req.params.id;

res.set({
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
})

  Tweet.findOne({
    id: id
  }).then((tweet) => {
    if(!tweet) {
      return res.status(404).send();
    }

    res.send({tweet});
  }, (err) => {
    res.status(400).send();
  });
});

app.get('/tweets/all', (req, res) => {

res.set({
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
})

  Tweet.find({}).then((list) => {
    if(!list) {
      return res.status(404).send();
    }

    res.send({list});
  }, (err) => {
    res.status(400).send();
  });
});

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
