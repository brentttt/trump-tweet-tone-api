import React from 'react';

import ListButton from './ListButton';
import LatestButton from './LatestButton';

//     <h1 className="header__title">Trump Tweet Tracker</h1>


const Header = (props) => (
  <div className="header">
    <h1 className="header__title">Trump Twitter Watch</h1>
    <p>A project analyzing the tone of <a href="https://twitter.com/realDonaldTrump?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">@realDonaldTrump</a>'s twitter with <a href="https://www.ibm.com/watson/services/tone-analyzer/">IBM Watson's Tone Analyzer</a></p>
    <ListButton handleListViewChange={props.handleListViewChange}/>
    <LatestButton />
  </div>
);

export default Header;
