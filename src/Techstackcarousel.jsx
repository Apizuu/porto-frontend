import React from 'react';
import './Techstackcarousel.css';

// Import icons from react-icons/si (Simple Icons)
// Install with: npm install react-icons
import {
  SiReact,
  SiNodedotjs,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiKubernetes,
  SiGit,
  SiTensorflow,
  SiPytorch,
  SiFigma,
  SiFlutter,
  SiAndroid,
  SiSwift,
  SiGo,
  SiRust,
  SiAmazon,
  SiFirebase,
  SiGraphql,
  SiMysql,
  SiNginx,
  SiJenkins,
  SiGithub
} from 'react-icons/si';

/* =======================
   Tech Stack Carousel Component
   - Seamless infinite scroll animation
   - Dual-row layout (forward/backward)
   - Title moved to App.jsx for consistency
======================= */

const TechStackCarousel = ({ showContent }) => {
  // Row 1 - Frontend & Backend
  const techStackRow1 = [
    { name: 'React', Icon: SiReact },
    { name: 'Node.js', Icon: SiNodedotjs },
    { name: 'Python', Icon: SiPython },
    { name: 'JavaScript', Icon: SiJavascript },
    { name: 'TypeScript', Icon: SiTypescript },
    { name: 'PostgreSQL', Icon: SiPostgresql },
    { name: 'MongoDB', Icon: SiMongodb },
    { name: 'MySQL', Icon: SiMysql },
    { name: 'Redis', Icon: SiRedis },
    { name: 'Docker', Icon: SiDocker },
    { name: 'Kubernetes', Icon: SiKubernetes },
    { name: 'Git', Icon: SiGit },
    { name: 'GitHub', Icon: SiGithub },
  ];

  // Row 2 - AI/ML, Mobile & DevOps
  const techStackRow2 = [
    { name: 'TensorFlow', Icon: SiTensorflow },
    { name: 'PyTorch', Icon: SiPytorch },
    { name: 'Figma', Icon: SiFigma },
    { name: 'Flutter', Icon: SiFlutter },
    { name: 'Android', Icon: SiAndroid },
    { name: 'Swift', Icon: SiSwift },
    { name: 'Go', Icon: SiGo },
    { name: 'Rust', Icon: SiRust },
    { name: 'AWS', Icon: SiAmazon },
    { name: 'Firebase', Icon: SiFirebase },
    { name: 'GraphQL', Icon: SiGraphql },
    { name: 'Nginx', Icon: SiNginx },
    { name: 'Jenkins', Icon: SiJenkins },
  ];

  return (
    <section 
      id="tech-stack" 
      className={`tech-carousel-section ${showContent ? 'section-visible' : ''}`}
    >
      <div className="carousel-track-container">
        {/* Row 1 - Scrolling Forward (Left to Right) */}
        <div className="carousel-row carousel-track-forward">
          {/* Multiple duplicates for truly seamless loop */}
          {[...Array(3)].map((_, duplicateIndex) => (
            <div key={`row1-set-${duplicateIndex}`} className="carousel-content">
              {techStackRow1.map((tech, index) => (
                <div 
                  key={`row1-${duplicateIndex}-${index}`} 
                  className="tech-logo-item" 
                  title={tech.name}
                >
                  <tech.Icon className="tech-logo" />
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Row 2 - Scrolling Backward (Right to Left) */}
        <div className="carousel-row carousel-track-backward">
          {/* Multiple duplicates for truly seamless loop */}
          {[...Array(3)].map((_, duplicateIndex) => (
            <div key={`row2-set-${duplicateIndex}`} className="carousel-content">
              {techStackRow2.map((tech, index) => (
                <div 
                  key={`row2-${duplicateIndex}-${index}`} 
                  className="tech-logo-item" 
                  title={tech.name}
                >
                  <tech.Icon className="tech-logo" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackCarousel;