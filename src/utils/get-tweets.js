const axios = require('axios');

const nextTweet = (currentCount) => {
  axios.get(`http://localhost:3000/tweets/i/` + (currentCount + 1))
  .then(res => {
    this.setState(() => ({
      nextTweet: res.data.tweet
    }));
  });
}


module.exports = {
  nextTweet
};
