import React, { Component } from 'react';

class Personality extends Component {
  render() {
    return (
      <section id="personality">
        <div className="photo-reference">
          <img src="./images/golden-boy.jpg" alt="stanwyck in golden boy"/>
        </div>
        <div className="story">
          <p>Those character traits she portrayed in her distinctive image wasn’t too far away from Barbara’s true self. While most Hollywood actors at the time were trained to speak in a “‘sophisticated Mid Atlantic” accent, she spoke in her natural Brooklyn accent throughout her films. Her authenticity, generosity, integrity, independent spirit, career-driven attitude, and professionalism was known all the world over. She was named the highest earning woman in America in 1944 at $400,0000. In today’s time, that’s about $5.4 million.</p>

          <p>Stories and testimonials shed light on her reputation from directors like Frank Capra, Fritz Lang, and Preston Sturges almost unanimously praised her. The director Cecil B. DeMille, once wrote, ‘’I have never worked with an actress who was more cooperative, less temperamental and a better workman, to use my term of highest compliment.’’ </p>

          <p>She admired regular working folks, making an effort getting to know the crew members from their names to their life. She treated people with respect and kindness while fighting for her beliefs. An unknown actor at the time, William Holden was cast as the leading role in the 1939 film, Golden Boy. Barbara fought hard to keep him cast and guided him on his acting journey that year. His gratitude lasted for years to come developing into a lifelong friendship. At the 50th Academy Awards, while presenting an award, Holden publicly thanked her for all she did for him.</p>
        </div>
        <div className="quotes">
          <h3 className="testimonials">“I have never worked with an actress who was more cooperative, less temperamental and a better workman, to use my term of highest compliment.”</h3>
          <p className="author">Cecil B. DeMille</p>
          <p className="author-title">American Filmmaker</p>
        </div>
      </section>
    )
  }
};

export default Personality
