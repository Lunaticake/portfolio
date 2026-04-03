import React from 'react';
import '../assets/styles/Imprint.scss';

function Imprint() {
  return (
    <div className="imprint-page">
      <div className="imprint-container">
        <div className="imprint-card">
          <h1 className="imprint-title">Imprint</h1>
          <section className="imprint-section">
            <p className="name">Cedric Elias Ferstl, BSc.</p>
            <p className="line">Game Developer</p>
            <p className="location">Schlierbach, Austria</p>
          </section>
          <section className="contact-section">
            <h2>Contact</h2>
            <p>Email: <a href="mailto:cedric.ferstl@gmail.com">cedric.ferstl@gmail.com</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/cedric-ferstl/" target="_blank" rel="noreferrer">in/cedric-ferstl</a></p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Imprint;