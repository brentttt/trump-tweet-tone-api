import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import Header from './Header';
import Tweet from './Tweet';
import Arrows from './Arrows';
import ListView from './ListView';

class TrumpTweetTracker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listView: false
    }
  }
  handlePrevTweet = () => {
    this.setState((prevState) => ({
      currentTweet: prevState.prevTweet,
    }), () => {
      axios.get(`http://localhost:3000/tweets/i/` + (this.state.currentTweet.count + 1))
      .then(res => {
          this.setState(() => ({
            nextTweet: res.data.tweet
          }));
      }).catch((err) => {
        if(err.response.status === 404) {
          this.setState(() => ({
            nextTweet: undefined
          }));
        }
      });

      axios.get(`http://localhost:3000/tweets/i/` + (this.state.currentTweet.count - 1))
      .then(res => {
          this.setState(() => ({
            prevTweet: res.data.tweet
          }));
      }).catch((err) => {
        if(err.response.status === 404) {
          this.setState(() => ({
            prevTweet: undefined
          }));
        }
      });
    });
  }
  handleNextTweet = () => {
    this.setState((prevState) => ({
      currentTweet: prevState.nextTweet,
    }), () => {
      axios.get(`http://localhost:3000/tweets/i/` + (this.state.currentTweet.count + 1))
      .then(res => {
          this.setState(() => ({
            nextTweet: res.data.tweet
          }));
      }).catch((err) => {
        if(err.response.status === 404) {
          this.setState(() => ({
            nextTweet: undefined
          }));
        }      });

      axios.get(`http://localhost:3000/tweets/i/` + (this.state.currentTweet.count - 1))
      .then(res => {
          this.setState(() => ({
            prevTweet: res.data.tweet
          }));
      }).catch((err) => {
        if(err.response.status === 404) {
          this.setState(() => ({
            prevTweet: undefined
          }));
        }
      });
    });
  }
  handleGetTweetById = (tweetId) => {
    let id = undefined;
    if(tweetId) {
      id = tweetId;
    } else {
      id = this.props.location.pathname.substring(1);
    }
    if(id) {
      axios.get(`http://localhost:3000/tweets/id/` + id)
      .then(res => {
        this.setState(() => ({
          currentTweet: res.data.tweet
        }), () => {
          axios.get(`http://localhost:3000/tweets/i/` + (this.state.currentTweet.count + 1))
          .then(res => {
              this.setState(() => ({
                nextTweet: res.data.tweet
              }));
          }).catch((err) => {
            if(err.response.status === 404) {
              this.setState(() => ({
                nextTweet: undefined
              }));
            }      });

          axios.get(`http://localhost:3000/tweets/i/` + (this.state.currentTweet.count - 1))
          .then(res => {
              this.setState(() => ({
                prevTweet: res.data.tweet
              }));
          }).catch((err) => {
            if(err.response.status === 404) {
              this.setState(() => ({
                prevTweet: undefined
              }));
            }
          });
        })
      })
    }
  }
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }
  updateHash = (url) => {
    const { match, location, history } = this.props;
    history.push(url)

    this.setState({
      url: url
    })
  }
  handleListViewChange = () => {
    this.setState((prevState) => ({
      listView: !prevState.listView
    }));
  }
  componentDidMount() {
    const url = this.props.location.pathname.substring(1);
    if(url) {
      this.setState({
        url: url
      }, () => {
        this.handleGetTweetById();
      })
    } else {
      axios.get(`http://localhost:3000/tweets/latest`)
      .then(res => {
        this.setState(() => ({
          currentTweet: res.data.currentTweet,
          prevTweet: res.data.prevTweet
        }));
      });
    }
  }
  componentDidUpdate() {

  }
  render() {
    return (
        <div>
          <Header handleListViewChange={this.handleListViewChange}/>
          <Arrows
            updateHash={this.updateHash}
            handlePrevTweet={this.handlePrevTweet}
            handleNextTweet={this.handleNextTweet}
            prevTweet={this.state.prevTweet}
            nextTweet={this.state.nextTweet}
          />
          <Tweet tweet={this.state.currentTweet} />
          {this.state.listView && <ListView
              handleGetTweetById={this.handleGetTweetById}
              handleListViewChange={this.handleListViewChange}
            />}
        </div>
    );
  }
};

export default withRouter(TrumpTweetTracker);
