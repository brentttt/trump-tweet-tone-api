import React from 'react';

const ListButton = (props) => (
  <button
    className="list-button"
    onClick={props.handleListViewChange}
  >
    <svg version="1.1"
     xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsa="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
     x="0px" y="0px" width="27.6px" height="21.1px" viewBox="0 0 27.6 21.1"
     xmlSpace="preserve">
    <g>
    <rect width="6.7" height="4"/>
    <rect x="8.7" width="18.9" height="4"/>
    </g>
    <g>
    <rect y="8.5" width="6.7" height="4"/>
    <rect x="8.7" y="8.5" width="18.9" height="4"/>
    </g>
    <g>
    <rect x="8.7" y="17.1" width="18.9" height="4"/>
    <rect y="17.1" width="6.7" height="4"/>
    </g>
    </svg>
  </button>
);

export default ListButton;
