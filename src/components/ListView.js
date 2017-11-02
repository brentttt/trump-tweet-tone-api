import React, { Component } from 'react';
import axios from 'axios';
import datetime from 'node-datetime';

import ListRemoveButton from './ListRemoveButton';

export default class ListView extends Component {
  constructor(props){
    console.log('test');
    super(props);
    this.state = {
      list: []
    }
  }
  componentWillMount() {
      axios.get(`http://localhost:3000/tweets/all`)
            .then(res => {
              this.setState(() => ({
                list: res.data.list.reverse()
              }));
            });

  }
  render(){
    return (
      <div className="list-view">
        <h1>Tweet List View</h1>
        <ListRemoveButton handleListViewChange={this.props.handleListViewChange} />
      {this.state.list.map((tweet) => {
        const dt = (datetime.create(tweet.created_at, 'I:Mp - d n Y')).format();

        return (
          <div key={tweet.id} className="list-view__item" onClick={()=> {
              this.props.handleGetTweetById(tweet.id);
              this.props.handleListViewChange();
            }}>
            <p className="list-view__item__text">{tweet.text}</p>
            <span className="list-view__item__datetime">{dt}</span>
          </div>
        )
      })}
      </div>
    );
  }
}
