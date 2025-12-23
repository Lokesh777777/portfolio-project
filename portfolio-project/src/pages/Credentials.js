import React from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';

export default function Credentials() {
  const certificates = [
    {
      id: 1,
      title: 'Java Full Stack Developer specialization',
      issuer: 'Coursera',
      date: '2025',
      image: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~JJV2T8F8JSC4/CERTIFICATE_LANDING_PAGE~JJV2T8F8JSC4.jpeg',
      credentialId: 'AWS-CDA-2023-001',
      verifyUrl: 'https://www.coursera.org/account/accomplishments/specialization/certificate/JJV2T8F8JSC4'
    },
    {
      id: 2,
      title: 'Data Structures & Backend with Java',
      issuer: 'Coursera',
      date: '2025',
      image: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~TEJX1V3WZEJ2/CERTIFICATE_LANDING_PAGE~TEJX1V3WZEJ2.jpeg',
      verifyUrl: 'https://coursera.org/share/0c33bad90040f4d4bb17bc8c4b090ef7'
    },
    {
      id: 3,
      title: 'Fundamentals of Java Programming',
      issuer: 'coursera',
      date: '2021',
      image: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~LW3L0TN9IHJW/CERTIFICATE_LANDING_PAGE~LW3L0TN9IHJW.jpeg',
      credentialId: 'FCC-JS-2021-789',
      verifyUrl: 'https://coursera.org/share/6b7f14ba72a7a8c1c6bd5799f7eac620'
    },
    {
      id: 4,
      title: 'Google Cloud Platform Fundamentals',
      issuer: 'Google Cloud',
      date: '2023',
      image: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~T4G60K6I2NXM/CERTIFICATE_LANDING_PAGE~T4G60K6I2NXM.jpeg',
      credentialId: 'GCP-FUND-2023-156',
      verifyUrl: 'https://coursera.org/share/bbeb14bb3a08045abde834d37021a3a6'
    },
    {
      id: 5,
      title: 'MongoDB Developer Certification',
      issuer: 'MongoDB University',
      date: '2022',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=400',
      credentialId: 'MONGO-DEV-2022-334',
      verifyUrl: 'https://university.mongodb.com/verification'
    },
    {
      id: 6,
      title: 'IBM Machine Learning Introduction For Everyone',
      issuer: 'coursera',
      date: '2023',
      image: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~XXUU4FZG8DLG/CERTIFICATE_LANDING_PAGE~XXUU4FZG8DLG.jpeg',
      credentialId: 'DOCKER-CA-2023-567',
      verifyUrl: 'https://coursera.org/share/8b6d0c997b0c52f317931e426e01e89d'
    }
  ];

  const badges = [
    {
      name: 'MongoDB Basics For Student',
      image: 'https://images.credly.com/size/680x680/images/08974f21-b24f-4a0e-be9d-4ae904907259/blob',
      url: 'https://www.credly.com/badges/0b79161c-bb81-409a-a927-aa2aefe72f3d/print'
    },
    {
      name: 'Java Basics [Hackerrank]',
      image: 'https://hrcdn.net/fcore/assets/badges/java-9d05b1f559.svg',
      url: 'https://www.hackerrank.com/profile/lokeshyuvaraj33'
    },
    {
      name: 'MySQL Basics [Hackerrank]',
      image: 'https://hrcdn.net/fcore/assets/badges/sql-89e76e7082.svg',
      url: 'https://www.hackerrank.com/profile/lokeshyuvaraj33'
    },
    {
      name: 'Mendix Rapid Developer',
      image: 'https://mendix.buildsystem.jp/wp-content/uploads/2021/06/FrontendImagesRapid_min-1.png',
      url: 'https://www.linkedin.com/in/lokeshyuvaraj/badges/code-quality'
    },
    {
      name: 'Flutter Development',
      image: 'https://cdn.qwiklabs.com/ODYXBQbqdFGwiAtdtNC6PtYr6PRzxZf1%2FN8TxDXtWsc%3D',
      url: 'https://www.cloudskillsboost.google/public_profiles/e9feffca-d0df-4404-8f15-9950c4af7c86/badges/14416545'
    },
    {
      name: 'MLOps for Gen AI',
      image: 'https://cdn.qwiklabs.com/%2FtTuLG7JDJIBJQv5NcPAhKHQj5968aKafxSg0fCTiXY%3D',
      url: 'https://www.cloudskillsboost.google/public_profiles/e9feffca-d0df-4404-8f15-9950c4af7c86/badges/13688293'
    }
  ];

  return (
    <div className="page credentials-page">
      <div className="credentials-header">
        <br />
        <br />
        <h1>Credentials & Certifications</h1>
        <p>My professional certifications and achievements</p>
      </div>

      <div className="credentials-content">
        <div className="certificates-section">
          <h2>Certifications</h2>
          <div className="certificates-grid">
            {certificates.map((cert) => (
              <div key={cert.id} className="certificate-card">
                <div className="certificate-image">
                  <img src={cert.image} alt={cert.title} />
                  <div className="certificate-overlay">
                    <Award size={40} />
                  </div>
                </div>
                <div className="certificate-content">
                  <h3>{cert.title}</h3>
                  <p className="issuer">{cert.issuer}</p>
                  <div className="certificate-meta">
                    <div className="date">
                      <Calendar size={16} />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="verify-link"
                  >
                    <ExternalLink size={16} />
                    Verify Certificate
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="badges-section">
          <h2>Professional Badges</h2>
          <div className="badges-grid">
            {badges.map((badge, index) => (
              <a
                key={index}
                href={badge.url}
                target="_blank"
                rel="noopener noreferrer"
                className="badge-item-with-image"
              >
                <img src={badge.image} alt={badge.name} className="badge-image" />
                <span className="badge-name">{badge.name}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="achievements-section">
          <h2>Key Achievements</h2>
          <div className="achievements-list">
            <div className="achievement-item">
              <div className="achievement-icon">
                <Award size={24} />
              </div>
              <div className="achievement-content">
                <h3>Top Performer in Academics 2024</h3>
                <p>Recognized for outstanding performance and success</p>
              </div>
            </div>
            <div className="achievement-item">
              <div className="achievement-icon">
                <Award size={24} />
              </div>
              <div className="achievement-content">
                <h3>Geeks For Geeks College's 5th Rank</h3>
                <p>Among 1000+ Students, I have Secured 5th Rank in competitive Programming of geeks for geeks</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
