import React, { Component } from 'react';

class Personality extends Component {
  render() {
    return (
      <section id="personality">
        {/* <div className="photo-reference">
          <img src="./images/golden-boy.jpg" alt="stanwyck in golden boy" className="photo-highlights"/>
        </div> */}
        <div className="photo-highlights">
          <img src="./images/golden-boy.jpg" alt="stanwyck in golden boy"/>
        </div>
        <h2 className="section-title">Being Stany</h2>
        <div className="story">
          <p>Maybe it’s just me, but when watching any of Stany’s (or Missy, as many have nicknamed her) films, I can see myself in her characters. Stany made me believe I could be her characters, the good and the bad. Her performances were raw, honest. She was the everyday women - flaws, perfection, insecurity, authentic, generous, career-driven, professional, and full of integrity and independent spirit. The characteristic traits she forged from every role weren’t too far away from her true self. It was well known that she was as real as it gets; or how today’s society calls it, “keeping it 100.” While most Hollywood actors at the time were trained to speak in a “sophisticated Mid Atlantic” accent, she kept her natural Brooklyn accent throughout her films. She was named the highest earning woman in America in 1944 at $400,0000. Today, that’s about $5.6 million. Her name may have even sparked the popularity of naming young girls “Barbara” in 1942. Stories and testimonials shed light on her reputation from directors like Frank Capra, Fritz Lang, and Preston Sturges almost unanimously praising her. The director Cecil B. DeMille, once wrote, “I have never worked with an actress who was more cooperative, less temperamental and a better workman, to use my term of highest compliment.’’</p>

          <p>She admired regular working folks, making an effort getting to know the crew members from their names to their life. She treated people with respect and kindness while fighting for her beliefs. An unknown actor at the time, William Holden was cast as the leading role in the 1939 film, Golden Boy. Barbara fought hard to keep him cast and guided him on his acting journey that year. His gratitude lasted for years to come developing into a lifelong friendship. At the 50th Academy Awards, while presenting an award, Holden publicly thanked her for all she did for him.</p>
        </div>
        <div id="testimonials" className="quotes">
          <h3 className="quote">“I have never worked with an actress who was more cooperative, less temperamental and a better workman, to use my term of highest compliment.”</h3>
          <p className="author">Cecil B. DeMille</p>
          <p className="author-title">American Filmmaker</p>
        </div>
      </section>
    )
  }
};

export default Personality
