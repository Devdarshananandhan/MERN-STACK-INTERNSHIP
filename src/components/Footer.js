import React from 'react';
import '../styles/footer.css';

function Footer() {
  return (
    <footer className="header">
      <div className="footer-content">
        <div className="social-links">
          <a href="https://github.com/Devdarshananandhan" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://leetcode.com/u/Devdarshan/" target="_blank" rel="noopener noreferrer">Leetcode</a>
          <a href="https://www.skillrack.com/faces/resume.xhtml?id=483819&key=39953035cbc3ae2ce073b6a53cfb55d8ae33fd59" target="_blank" rel="noopener noreferrer">SkillRack</a>
          <a href="https://anandhandevdarshan@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
        </div>
        <div className="copyright">
          Contact: +91 9865645563
        </div>
      </div>
    </footer>
  );
}

export default Footer;