import React, { Component } from 'react';

class Closing extends Component {
  render() {
    return (
      <section id="closing">
        <div id="testimonials" className="quotes">
          <h3 className="quote">“…the actress in control, the very essence of Barbara Stanwyck’s imminent. That hold she has in the audience is reality, she’s professional. When she walks across the screen, it’s beauty and confidence, she’s always the woman that she plays, and yet always herself.”</h3>
        </div>
        {/* <div className="photo-reference">
          <img src="./images/barbara-stanwyck-portrait-3.jpg" alt="1930s stanwyck" className="photo-highlights"/>
        </div> */}
        <div className="photo-highlights">
          <img src="./images/barbara-stanwyck-portrait-3.jpg" alt="1930s stanwyck"/>
        </div>
      </section>
    )
  }
};

export default Closing
