import React, { useState, useEffect } from 'react';


export default function CyberLoadingScreen({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const loadingMessages = [
    'Initializing Digital Core...',
    'Engaging Quantum Threads...',
    'Powering Neural Mesh...',
    'Linking Dimensional API...',
    'Decrypting Visual Matrix...',
    'Finalizing Cyber Framework...'
  ];
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(onLoadingComplete, 1000);
          return 100;
        }
        return prev + Math.random() * 2;
      });
    }, 60);

    const messageInterval = setInterval(() => {
      setMessageIndex(prev => (prev + 1) % loadingMessages.length);
    }, 2800);

    return () => {
      clearInterval(progressInterval);
      clearInterval(messageInterval);
    };
  }, [onLoadingComplete]);

  useEffect(() => {
    const current = loadingMessages[messageIndex];
    let i = 0;
    const typeInterval = setInterval(() => {
      setDisplayText(current.slice(0, ++i));
      if (i >= current.length) clearInterval(typeInterval);
    }, 45);

    return () => clearInterval(typeInterval);
  }, [messageIndex]);

  return (
    <div className="cyber-loading-screen">
      <div className="matrix-bg"></div>
      <div className="holo-grid"></div>
      <div className="stars"></div>

      <div className="cyber-ui">
        <div className="rotating-ring">
          <div className="inner-core">{"<Lokesh />"}</div>
        </div>

        <div className="ai-text">
          <span>{displayText}</span><span className="flicker-cursor">|</span>
        </div>

        <div className="dna-loader">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className={`dna-cell ${progress >= i * 5 ? 'active' : ''}`}
              style={{ animationDelay: `${i * 0.05}s` }}
            />
          ))}
        </div>

        <div className="cyber-percent">{Math.round(progress)}%</div>
      </div>
    </div>
  );
}
