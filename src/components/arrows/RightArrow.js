import React from 'react';

const RightArrow = (props) => (
  <button
    className="arrow right-arrow"
    onClick={() => {
      const url = props.nextTweet.id;
      props.updateHash(url);
      props.handleNextTweet();
    }}
    disabled={!props.nextTweet}
  >
  <svg version="1.1"
  	 xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsa="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
  	 x="0px" y="0px" width="34.7px" height="31.6px" viewBox="0 0 34.7 31.6"
  	 xmlSpace="preserve">
  <path d="M34.7,15.3c0-0.1,0-0.1-0.1-0.2c0-0.1,0-0.1-0.1-0.2c0-0.1-0.1-0.1-0.1-0.2c0-0.1-0.1-0.1-0.1-0.2c-0.1-0.1-0.2-0.2-0.3-0.3
  	L20.4,0.6c-0.8-0.8-2-0.8-2.8,0c-0.8,0.8-0.8,2,0,2.8l10.3,10.3H2c-1.1,0-2,0.9-2,2s0.9,2,2,2h26L17.6,28.1c-0.8,0.8-0.8,2,0,2.8
  	c0.4,0.4,0.9,0.6,1.4,0.6s1-0.2,1.4-0.6l13.7-13.7c0.4-0.4,0.6-1,0.6-1.5C34.7,15.6,34.7,15.5,34.7,15.3z"/>
  </svg>



  </button>
);

export default RightArrow;
