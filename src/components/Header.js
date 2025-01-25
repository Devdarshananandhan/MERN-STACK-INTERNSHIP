import React from 'react';
import '../styles/components.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <img 
          src="/images/profile.jpg" 
          alt="Profile" 
          className="profile-image" 
        />
        <h1 color='white'>Devdarshan A</h1>
        <p>UI/UX Designer |Web Developer | Designer | Creative Thinker </p>
      </div>
    </header>
  );
}

export default Header;