const { requestTweets } = require('./request-tweets');
const { getTone } = require('./get-tone');
const { Tweet } = require('./save-tweets');
const { mongoose } = require('./mongoose');
const { forEach } = require('async-foreach');

const getTweets = () => {
  requestTweets.then((data) => {
    data.reverse();
    forEach(data, function(tweet, index) {

      const done = this.async();

      Tweet.find({id: tweet.id}).exec().then((res) => {
        if(res.length === 0) {
          getTone(tweet['text']).then((tone) => {
            tweet.tone = tone;

            Tweet.count({}, function(err, count){
              tweet.count = count + 1;
              console.log(tweet);

              const newTweet = new Tweet(tweet);
              newTweet.save().then(() => {
                done();
              }).catch((err) => {
                console.log('ERROR', err);
              });
            });

          }).catch((err) => {
            console.log(err);
          });
        }
      });
    });
  });
}

module.exports = {
  getTweets
}
