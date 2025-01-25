import React from 'react';

function About() {
  return (
    <section className="about-section">
      <h2>About Me</h2>
      <div className="about-content">
        <p className='my-class'>
          Hi there! I'm a passionate <strong>Full-Stack Developer</strong> with experience in building 
          scalable web applications and crafting intuitive user interfaces. I specialize in technologies 
          like <span>React.js</span>, <span>Node.js</span>, and <span>MongoDB</span>.
        </p>
        <p className='my-class'>
          I thrive on solving complex problems and collaborating with cross-functional teams to deliver 
          high-quality solutions. When I'm not coding, you'll find me exploring new tech trends, writing 
          blogs, or experimenting with personal projects.
        </p>
        <p className='my-class'>
          My areas of expertise include:
        </p>
        <ul className="about-list">
          <li>Frontend Development: Flutter, React, HTML, CSS, JavaScript, TailwindCSS</li>
          <li>Backend Development: Node.js, Express</li>
          <li>Database Management: MongoDB, MySQL</li>
          <li>Version Control: Git, GitHub</li>
        </ul>
        <div className="personal-details">
          <p><strong>Email:</strong> anandhandevdarshan@gmail.com</p>
          <p><strong>Location:</strong> Coimbatore, India</p>
        </div>
      </div>
    </section>
  );
}

export default About;