import React, { useEffect, useRef } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateFooterHeight = () => {
      if (footerRef.current) {
        const footerHeight = footerRef.current.offsetHeight;
        document.documentElement.style.setProperty('--footer-height', `${footerHeight}px`);
      }
    };

    // Update immediately after mount
    updateFooterHeight();

    // Update on window resize
    window.addEventListener('resize', updateFooterHeight);

    return () => {
      window.removeEventListener('resize', updateFooterHeight);
    };
  }, []);

  return (
    <footer ref={footerRef} className="footer">
      <p>Based on a design by <a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer">Yuji Sato</a></p>
      <p>Tab icon created by <a href="https://www.flaticon.com/free-icons/game-boy-advance" title="game boy advance icons" target="_blank" rel="noreferrer">Creative Avenue - Flaticon</a></p>
    </footer>
  );
}

export default Footer;