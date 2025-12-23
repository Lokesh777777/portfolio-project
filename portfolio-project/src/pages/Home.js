import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import lokeshImg from '../assets/lokesh.jpg';


export default function Home() {
  return (
    <div className="page home-page">
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Lokesh</span>
            </h1>
            <h2 className="hero-subtitle">Full Stack Java Developer</h2>
            <p className="hero-description">
              I create beautiful and functional web applications using modern technologies. 
              Passionate about clean code, user experience, and continuous learning.
            </p>
            
            <div className="hero-buttons">
              <Link to="/projects" className="btn btn-primary">
                View My Work
              </Link>
              <Link to="/about" className="btn btn-secondary">
                About Me
              </Link>
            </div>

            <div className="social-links">
              <a href="https://github.com/Lokesh777777" target="_blank" rel="noopener noreferrer" className="social-link">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/lokesh-y-6ba15628a/" target="_blank" rel="noopener noreferrer" className="social-link">
                <Linkedin size={24} />
              </a>
              <a href="mailto:lokeshyuvaraj33@gmail.com" className="social-link">
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="profile-image">
              <img src={lokeshImg} alt="Profile" />
            </div>
          </div>
        </div>
      </div>

      <div className="quick-stats">
        <div className="stat-item">
          <h3>50+</h3>
          <p>Projects Completed</p>
        </div>
        <div className="stat-item">
          <h3>3+</h3>
          <p>Participated Hackathons</p>
        </div>
        <div className="stat-item">
          <h3>100+</h3>
          <p>Leetcode problems Solved</p>
        </div>
        <div className="stat-item">
          <h3>10+</h3>
          <p>Technologies</p>
        </div>
      </div>
    </div>
  );
}