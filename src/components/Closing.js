import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Closing extends Component {
  render() {
    return (
      <div id="closing">
        <div className="section-hero">
          {/* <img src="./images/barbara-stanwyck-portrait-3.jpg" alt="1930s stanwyck"/> */}
          <img src="./images/barbara-stanwyck.gif" alt="gif of stanwyck blowing kisses"/>
        </div>
        <div className="story" id="tribute-info">
          <p className="article-title">References</p>
          <ul>
            <li><Link to="https://www.thehairpin.com/2013/03/scandals-of-classic-hollywood-the-many-faces-of-barbara-stanwyck/" id="tribute-link" target="_blank">The Hairpin</Link></li>
            <li><Link to="https://filmdialogueone.wordpress.com/2017/10/24/barbara-stanwyck/" id="tribute-link" target="_blank">Film Dialogue</Link></li>
            <li><Link to="https://www.bestmoviesbyfarr.com/articles/barbara-stanwyck-bio/2016/04" id="tribute-link" target="_blank">Best Movies By Farr</Link></li>
            <li><Link to="https://www.barbara-stanwyck.com/essential-guide-barbara-stanwyck/" id="tribute-link" target="_blank">The Essential Guide to Barbara Stanwyck</Link></li>
            <li><Link to="https://www.nytimes.com/2013/11/14/books/a-life-of-barbara-stanwyck-by-victoria-wilson.html" id="tribute-link" target="_blank">Los Angeles Times Book Review - "A Life of Barbara Stanwyck"</Link></li>
          </ul>
        </div>
      </div>
    )
  }
};

export default Closing
