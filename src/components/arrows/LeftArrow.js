import React from 'react';
import { withRouter } from 'react-router-dom';

const LeftArrow = withRouter(({history, ...props}) => (
  <button
    className="arrow left-arrow"
    onClick={() => {
      const url = props.prevTweet.id;
      props.updateHash(url);
      props.handlePrevTweet();
    }}
    disabled={!props.prevTweet}
    >
    <svg version="1.1"
    	 xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsa="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
    	 x="0px" y="0px" width="34.7px" height="31.6px" viewBox="0 0 34.7 31.6"
    	 xmlSpace="preserve">
    <path d="M0,16.3c0,0.1,0,0.1,0.1,0.2c0,0.1,0,0.1,0.1,0.2c0,0.1,0.1,0.1,0.1,0.2c0,0.1,0.1,0.1,0.1,0.2c0.1,0.1,0.2,0.2,0.3,0.3
    	L14.3,31c0.8,0.8,2,0.8,2.8,0c0.8-0.8,0.8-2,0-2.8L6.8,17.9h25.9c1.1,0,2-0.9,2-2s-0.9-2-2-2h-26L17.1,3.4c0.8-0.8,0.8-2,0-2.8
    	C16.7,0.2,16.2,0,15.7,0c-0.5,0-1,0.2-1.4,0.6L0.6,14.3c-0.4,0.4-0.6,1-0.6,1.5C0,15.9,0,16.1,0,16.3z"/>
    </svg>

  </button>
));

export default LeftArrow;
