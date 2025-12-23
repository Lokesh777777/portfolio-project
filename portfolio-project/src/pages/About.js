import React from 'react';

export default function About() {
  const techStack = [
    {
      name: 'Core Java',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
    },
    {
      name: 'React',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    {
      name: 'Spring Boot',
      logo: 'https://img.icons8.com/?size=100&id=90519&format=png&color=000000'
    },
    {
      name: 'MySQL',
      logo: 'https://img.icons8.com/?size=100&id=9nLaR5KFGjN0&format=png&color=000000'
    },
    {
      name: 'Python',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
    },
    {
      name: 'MongoDB',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
    },
    {
      name: 'HTML5',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
    },
    {
      name: 'CSS3',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
    },
    {
      name: 'JavaScript',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    {
      name: 'Git',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
    },
    {
      name: 'RESTful APIs',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg'
    },
    {
      name: 'Maven',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg'
    }
  ];

  return (
    <div className="page about-page">
      <div className="about-header">
        <br />
        <br />
        <h1>About Me</h1>
        <p>Get to know me better</p>
      </div>

      <div className="about-content">
        <div className="about-text">
          <h2>Hello! I'm Lokesh</h2>
          <p>
            I'm a passionate Full Stack Java Developer with over 2 years of learning in creating
            web applications. I love turning complex problems into simple, beautiful designs.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies or contributing to
            open source projects.
          </p>
          <p>
            I believe in writing clean, maintainable code and creating user experiences that
            make a difference. I'm always eager to learn new technologies and take on
            challenging projects.
          </p>
        </div>


          <div className="tech-stack">
          <h2>Tech Stack</h2>
          <div className="super-skills-grid">
            {techStack.map((skill, index) => (
              <div key={index} className="super-skill-card">
                <div className="icon-wrapper">
                  <img src={skill.logo} alt={skill.name} className="glow-icon" />
                </div>
                <div className="skill-label">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
      <div className="github-display">
      <h2 className="github-title">My Development Activity</h2>
      <div className="github-container">
        <div className="calendar-wrapper">
          <img 
            src="https://ghchart.rshah.org/3b82f6/lokesh777777" 
            alt="Lokesh's GitHub Contributions"
            className="github-calendar"
          />
          <div className="github-links">
            <a
              href="https://github.com/lokesh777777"
              target="_blank"
              rel="noopener noreferrer"
              className="github-profile-link"
            >
              <svg className="github-icon" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
              </svg>
              View My GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
