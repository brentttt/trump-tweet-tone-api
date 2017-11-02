import React from 'react';

const ListRemoveButton = (props) => (
  <button
    className="list-view__remove"
    onClick={props.handleListViewChange}
  >
  <svg version="1.1"
  	 xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsa="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
  	 x="0px" y="0px" width="24.5px" height="24.5px" viewBox="0 0 24.5 24.5"
  	 xmlSpace="preserve">
  <path d="M14.5,12.3l9.5-9.5c0.6-0.6,0.6-1.6,0-2.3c-0.6-0.6-1.6-0.6-2.3,0L12.3,10L2.7,0.5c-0.6-0.6-1.6-0.6-2.3,0
  	c-0.6,0.6-0.6,1.6,0,2.3l9.5,9.5l-9.5,9.5c-0.6,0.6-0.6,1.6,0,2.3c0.3,0.3,0.7,0.5,1.1,0.5s0.8-0.2,1.1-0.5l9.5-9.5l9.5,9.5
  	c0.3,0.3,0.7,0.5,1.1,0.5s0.8-0.2,1.1-0.5c0.6-0.6,0.6-1.6,0-2.3L14.5,12.3z"/>
  </svg>


  </button>
);

export default ListRemoveButton;
