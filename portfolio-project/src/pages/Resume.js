import React from 'react';
import { Download, Mail, Phone, MapPin, Calendar } from 'lucide-react';

const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1nNHUbpGV4l6tPscjwcwh0jNAHvy6TNZ-/view?usp=sharing'; // PDF in your public folder
    link.download = 'resume.pdf'; // The name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

export default function Resume() {
  return (
    <div className="page resume-page">
      <br/>
      <br/>
      <div className="resume-header">
        <h1>Resume</h1>
        <button className="download-btn" onClick={handleDownload}>
          <Download size={20} />
          Download PDF
        </button>
      </div>

      <div className="resume-container">
        <div className="resume-content">
          {/* Header */}
          <div className="resume-section header-section">
            <h1>Lokesh Y</h1>
            <h2>Full Stack Java Developer</h2>
            <div className="contact-info">
              <div className="contact-item">
                <Mail size={16} />
                <span>lokeshyuvaraj33@gmail.com</span>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <span>+91 87545 72686</span>
              </div>
              <div className="contact-item">
                <MapPin size={16} />
                <span>Chennai, Tamil Nadu</span>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="resume-section">
            <h3>Professional Summary</h3>
            <p>
              Aspiring Full Stack Java Developer with 2+ years of learning and building 
              scalable web applications. Proficient in Java, MySQL and modern web 
              technologies. Strong problem-solving skills and passion for creating 
              user-friendly applications.
            </p>
          </div>

          {/* Experience */}
          <div className="resume-section">
            <h3>Work Experience</h3>
            
            <div className="experience-item">
              <div className="experience-header">
                <h4>Web Developer Intern</h4>
                <span className="company">Internpe</span>
                <span className="date">Aug 2024 - Sep 2024</span>
              </div>
              <ul>
                <li>developed of 3 web applications using HTML, CSS and JavaScript</li>
                <li>Collaborated with Mentor in Google classroom and deliver projects on time</li>
              </ul>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h4>Artificial Intelligence and Green Technology Intern</h4>
                <span className="company">Shell (Edunet)</span>
                <span className="date">Apr 2025</span>
              </div>
              <ul>
                <li>Worked on the Forest fire Detection machine learning model</li>
                <li>Attended the presentation for the project</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div className="resume-section">
            <h3>Education</h3>
            <div className="education-item">
              <h4>Bachelor of Technology in Information Technology</h4>
              <span className="school">Meenakshi Sundararajan Engineering College</span>
              <span className="date">2023 - 2027</span>
              <p>GPA: 8.7/10.0</p>
            </div>
          </div>

          {/* Skills */}
          <div className="resume-section">
            <h3>Technical Skills</h3>
            <div className="skills-categories">
              <div className="skill-category">
                <h4>Frontend</h4>
                <p>React, JavaScript, HTML5, CSS3, SCSS, Bootstrap</p>
              </div>
              <div className="skill-category">
                <h4>Backend</h4>
                <p>Java, Spring Boot, Spring MVC and RESTful APIs</p>
              </div>
              <div className="skill-category">
                <h4>Database</h4>
                <p>MongoDB, PostgreSQL, MySQL</p>
              </div>
              <div className="skill-category">
                <h4>Tools & Others</h4>
                <p>Git, Docker, IntelliJ IDEA, VS Code, Github</p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="resume-section">
            <h3>Certifications</h3>
            <ul className="certifications-list">
              <li><a href='https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=400'>Fundamentals of Java Programming (2025)</a></li>
              <li><a href='https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~TEJX1V3WZEJ2/CERTIFICATE_LANDING_PAGE~TEJX1V3WZEJ2.jpeg'>Data Structures And Back end With Java (2025)</a></li>
              <li><a href='https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~XXUU4FZG8DLG/CERTIFICATE_LANDING_PAGE~XXUU4FZG8DLG.jpeg'>IBM Machine Learning Introduction For Everyone (2025)</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}