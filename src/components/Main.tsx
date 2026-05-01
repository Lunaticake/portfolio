import React from "react";
//import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Mail';
import '../assets/styles/Main.scss';
import avatar from '../assets/images/profile_img.jpg';

function Main() {
  const URL_LINKEDIN = "https://www.linkedin.com/in/cedric-ferstl/";
  const URL_EMAIL = "mailto:cedric.ferstl@gmail.com";

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatar} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href={URL_LINKEDIN} target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href={URL_EMAIL} target="_blank" rel="noreferrer"><EmailIcon/></a>
          </div>
          <h1>Cedric Ferstl</h1>
          <p>Game Developer</p>
          <div className="mobile_social_icons">
            <a href={URL_LINKEDIN} target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href={URL_EMAIL} target="_blank" rel="noreferrer"><EmailIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;