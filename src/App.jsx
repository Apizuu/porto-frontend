import React, { useState, useEffect } from 'react';
import './App.css';
import MovingStars from './animations/MovingStars';
import TechStackCarousel from './TechStackCarousel';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

/* =======================
   Logo Component (TUNGGAL)
======================= */
const LogoImage = ({ className }) => (
  <img
    src="/logo.png"
    alt="HR Logo"
    className={`hr-logo ${className || ''}`}
  />
);

/* =======================
   Loading Screen
======================= */
const LoadingScreen = ({ isLoading, onLoadingComplete }) => {
  useEffect(() => {
    if (!isLoading) return;

    const timer = setTimeout(() => {
      onLoadingComplete();
    }, 2800);

    return () => clearTimeout(timer);
  }, [isLoading, onLoadingComplete]);

  if (!isLoading) return null;

  return (
    <div className="loading-screen">
      <div className="loading-container" />
    </div>
  );
};

/* =======================
   Header / Navbar (STICKY with Active State)
======================= */
const Header = ({ showNavbar, logoState }) => {
  const [activeLink, setActiveLink] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      // Detect active section based on scroll position
      const sections = ['about', 'experience', 'projects', 'certificates', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveLink(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <header className={`header ${showNavbar ? 'header-visible' : ''}`}>
      <div className="container">
        <div className="nav-brand">
          <div className={`nav-logo-placeholder ${logoState === 'navbar' ? 'logo-visible' : 'logo-hidden'}`}>
            {logoState === 'navbar' && <LogoImage />}
          </div>
          <span className="brand-name">Hafizyah Rayhan</span>
        </div>

        <nav className="nav-links">
          <a 
            href="#about" 
            className={`nav-link ${activeLink === 'about' ? 'active' : ''}`}
            onClick={() => handleLinkClick('about')}
          >
            About
          </a>
          <a 
            href="#experience" 
            className={`nav-link ${activeLink === 'experience' ? 'active' : ''}`}
            onClick={() => handleLinkClick('experience')}
          >
            Experience
          </a>
          <a 
            href="#projects" 
            className={`nav-link ${activeLink === 'projects' ? 'active' : ''}`}
            onClick={() => handleLinkClick('projects')}
          >
            Projects
          </a>
          <a 
            href="#certificates" 
            className={`nav-link ${activeLink === 'certificates' ? 'active' : ''}`}
            onClick={() => handleLinkClick('certificates')}
          >
            Certificates
          </a>
          <a 
            href="#contact" 
            className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`}
            onClick={() => handleLinkClick('contact')}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

/* =======================
   Wormhole Component
======================= */
const Wormhole = () => (
  <div className="wormhole-container">
    <div className="wormhole-outer-glow" />
    <div className="wormhole-ring wormhole-ring-1" />
    <div className="wormhole-ring wormhole-ring-2" />
    <div className="wormhole-ring wormhole-ring-3" />
    <div className="wormhole-center-glow">
      <div className="profile-image-wrapper">
        <img 
          src="/my-pict.png" 
          alt="Hafizyah Rayhan" 
          className="profile-image"
        />
      </div>
    </div>
  </div>
);

/* =======================
   Hero (ABOUT SECTION - TIDAK DIUBAH)
======================= */
const Hero = ({ showContent }) => (
  <section id="about" className={`hero ${showContent ? 'hero-visible' : ''}`}>
    <Wormhole />
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="neon-text">Hafizyah Rayhan</span>
        </h1>
        <p className="hero-subtitle">Full Stack Developer & UI/UX Enthusiast</p>
        <p className="hero-description">
          Building modern web applications with React, Node.js, and cutting-edge technologies.
          Passionate about creating beautiful and functional user experiences.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-secondary">Contact Me</a>
        </div>
      </div>
    </div>
  </section>
);

/* =======================
   Experience Section
======================= */
const Experience = ({ showContent }) => {
    const experiences = [
    {
      id: 1,
      position: "Software Developer (Full-Stack)",
      company: "Telkom Digistar Class Internship",
      location: "South Jakarta, Indonesia",
      period: "Aug 2025 - Jan 2026",
      type: "Full-Time Internship",
      description: "Developed a full-stack web application to automate monthly budget operation reporting and integrated automation workflows.",
      responsibilities: [
        "Developed a web application using React for frontend and backend services to automate monthly reporting for budget operations",
        "Integrated automation workflows using n8n",
        "Handled DevOps tasks including deployment and environment configuration"
      ]
    },
    {
      id: 2,
      position: "Data Specialist",
      company: "The Directorate of Research Ecosystem and Funding, Universitas Indonesia",
      location: "Depok, Indonesia",
      period: "Jan 2025 - May 2025",
      type: "Contract",
      description: "Managed research and funding data to ensure accuracy, consistency, and efficient data flow across platforms.",
      responsibilities: [
        "Performed data entry, verification, and maintenance related to research ecosystem and funding",
        "Ensured accuracy, consistency, and completeness of system data",
        "Managed and monitored data pipelines using Microsoft Power Automate and Flask Python"
      ]
    },
    {
      id: 3,
      position: "Vice Head of Design Specialist & Software Engineer Staff",
      company: "Exercise FTUI",
      location: "Depok, Indonesia",
      period: "Jan 2024 - Dec 2024",
      type: "Organization",
      description: "Led design branding efforts and implemented UI/UX solutions for multiple client projects.",
      responsibilities: [
        "Developed brand image through Instagram posts, posters, and promotional visual content",
        "Handled UI/UX design and implemented designs into code",
        "Worked on client projects including Urala Indonesia, Pemira FTUI, and KAT"
      ]
    },
    {
      id: 4,
      position: "Super Member",
      company: "Google Developer Groups UI (GDSC)",
      location: "Depok, Indonesia",
      period: "Jan 2023 - Feb 2024",
      type: "Community",
      description: "Actively learned software development and contributed to collaborative real-world projects.",
      responsibilities: [
        "Learned and developed software in the GDSC environment",
        "Contributed to real-world projects developed collaboratively with the team"
      ]
    },
    {
      id: 5,
      position: "Staff",
      company: "IME (Ikatan Mahasiswa Elektro)",
      location: "Depok, Indonesia",
      period: "Jan 2023 - Dec 2024",
      type: "Organization",
      description: "Supported branding efforts and built automation tools to improve design workflow efficiency.",
      responsibilities: [
        "Created visual content such as Instagram posts, posters, and promotional materials under brand guidelines",
        "Developed automation tools to streamline design processes",
        "Enhanced efficiency in template creation within Figma"
      ]
    }
  ];

  return (
    <section id="experience" className={`experience-section ${showContent ? 'section-visible' : ''}`}>
      <div className="section-container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="experience-item" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="experience-marker"></div>
              <div className="experience-content">
                <div className="experience-header">
                  <div className="experience-title-group">
                    <h3 className="experience-position">{exp.position}</h3>
                    <div className="experience-meta">
                      <span className="experience-company">{exp.company}</span>
                      <span className="experience-separator">•</span>
                      <span className="experience-type">{exp.type}</span>
                    </div>
                    <div className="experience-location-period">
                      <span className="experience-location">{exp.location}</span>
                      <span className="experience-separator">•</span>
                      <span className="experience-period">{exp.period}</span>
                    </div>
                  </div>
                </div>
                <p className="experience-description">{exp.description}</p>
                <ul className="experience-responsibilities">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* =======================
   Projects Section (IMPROVED SMOOTH CAROUSEL)
======================= */
const Projects = ({ showContent }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const projects = [
  {
    id: 1,
    title: "Full-Stack Automation Monthly Budget Reporting",
    description: "Web-based platform for n8n-based workflow automation in monthly budget operations at Telkom, featuring Redis queue monitoring, Python data processing, SAP automation, and a full-stack dashboard.",
    tech: ["React", "Node.js", "PostgreSQL", "Redis", "Python", "n8n"],
    image: "/budget-automation.png",
    link: "confidential"
  },
  {
    id: 2,
    title: "High Availability & Scalable AWS Architecture for Telkom",
    description: "Designed secure and highly available AWS infrastructure with multi-AZ deployment, auto scaling, private networking, and containerized deployment using AWS ECR.",
    tech: ["AWS", "EC2", "RDS", "ALB", "VPC", "Docker"],
    image: "/aws-architecture.png",
    link: "confidential"
  },
  {
    id: 3,
    title: "Automated Cisco CSR 8000 Management with Ansible",
    description: "Scalable network automation project managing Cisco CSR 8000 routers on AWS using Ansible playbooks for configuration and command execution.",
    tech: ["Ansible", "AWS", "Cisco CSR 8000", "Linux"],
    image: "/cisco-ansible.png",
    link: "confidential"
  },
  {
    id: 4,
    title: "AI Chatbot FAQ for GPTP Telkom Recruitment",
    description: "AI chatbot using Ollama with a locally hosted LLM to answer recruitment FAQs, exposing webhook APIs for real-time frontend integration.",
    tech: ["Ollama", "Python", "LLM", "API", "n8n"],
    image: "/ai-chatbot.png",
    link: "confidential"
  },
  {
    id: 5,
    title: "Full Local Hosting Apache CloudStack Instance Manager",
    description: "On-premise infrastructure using Apache CloudStack to provision, monitor, and manage virtual machine instances at Universitas Indonesia.",
    tech: ["Apache CloudStack", "Networking", "VLAN", "NAT", "Tailscale"],
    image: "/cloudstack.png",
    link: "https://github.com/Apizuu/cloudstack-setup.git"
  },
  {
    id: 6,
    title: "Power Automate Pipeline System for DPER UI",
    description: "Custom Power Automate connector integrated with Flask backend to automate administrative workflows, eligibility scoring, and MongoDB storage.",
    tech: ["Microsoft Power Automate", "Flask", "Python", "MongoDB"],
    image: "/powerautomate.png",
    link: "https://github.com/Apizuu/DPER-Powerautomate-Data-Pipeline.git"
  },
  {
    id: 7,
    title: "Urala Indonesia Web Portfolio",
    description: "Led UI/UX and frontend development for Urala Indonesia's official website, from Figma prototyping to responsive React implementation.",
    tech: ["React", "Figma", "UI/UX"],
    image: "/urala.png",
    link: "https://urala.id"
  },
  {
    id: 8,
    title: "Calorizz Daily Food Tracker with Image Recognition",
    description: "Mobile app using TensorFlow Lite for food image recognition and calorie estimation, integrated with React Native and Flask backend.",
    tech: ["TensorFlow", "React Native", "Flask", "PostgreSQL", "Redis"],
    image: "/calorizz.png",
    link: "https://github.com/Apizuu/Calorizz.git"
  },
  {
    id: 9,
    title: "CI/CD Pipeline on Proxmox Kubernetes",
    description: "Built GitLab CI/CD pipeline on on-premise Proxmox infrastructure with Dockerized services deployed to Kubernetes using MongoDB.",
    tech: ["GitLab CI", "Docker", "Kubernetes", "MongoDB", "Proxmox"],
    image: "/cicd.png",
    link: "https://gitlab.com/calorizzteam1/calorizz.git"
  },
  {
    id: 10,
    title: "3D Virtual Meeting Platform Using Unity",
    description: "3D real-time virtual meeting environment using Unity and C#, supporting avatars, interaction, and immersive collaboration.",
    tech: ["Unity", "C#", ".NET"],
    image: "/unity-meeting.png",
    link: "https://github.com/Apizuu/HCI-InteractiveMeetingRoom.git"
  },
  {
    id: 11,
    title: "SafeBite: UV Smart Sterilization System",
    description: "IoT-based UV-C utensil sterilization system using Raspberry Pi, OpenCV, backend services, and real-time dashboard monitoring.",
    tech: ["Raspberry Pi", "OpenCV", "Flask", "React", "IoT"],
    image: "/safebite.png",
    link: "https://github.com/Apizuu/SafeBite.git"
  },
  {
    id: 12,
    title: "JBus Android App",
    description: "Java-based Android app for bus ticket search, booking, and seat reservation with SQLite storage and RecyclerView UI.",
    tech: ["Java", "Android Studio", "SQLite"],
    image: "/jbus.png",
    link: "https://github.com/Apizuu/JBus-Android"
  },
  {
    id: 13,
    title: "Biodefense Assessment by NVIDIA",
    description: "Analyzed infection rate patterns using Python and tabular data to identify high-risk sectors and demographic trends.",
    tech: ["Python", "Pandas", "NumPy", "Data Analysis"],
    image: "/biodefense.png",
    link: "https://github.com/Apizuu/Biodefense-Assesment.git"
  }
];

  // Animation lock to prevent rapid clicking
  const handleSlide = (direction) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    if (direction === 'next') {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    } else {
      setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    }
    
    // Unlock after animation completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  };

  const nextSlide = () => handleSlide('next');
  const prevSlide = () => handleSlide('prev');

  // Generate all visible cards with proper positioning
  const getCardPosition = (index) => {
    const diff = (index - currentIndex + projects.length) % projects.length;
    
    // Handle wrap-around to ensure smooth transitions
    let position;
    if (diff === 0) {
      position = 0; // center
    } else if (diff === 1 || diff === -(projects.length - 1)) {
      position = 1; // right
    } else if (diff === projects.length - 1 || diff === -1) {
      position = -1; // left
    } else if (diff <= projects.length / 2) {
      position = 2; // far right (hidden)
    } else {
      position = -2; // far left (hidden)
    }
    
    return position;
  };

  return (
    <section id="projects" className={`projects-section ${showContent ? 'section-visible' : ''}`}>
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        <div className="carousel-container">
          <button 
            className="carousel-btn carousel-btn-prev" 
            onClick={prevSlide}
            disabled={isAnimating}
          >
            ‹
          </button>
          
          <div className="carousel-wrapper">
            <div className="carousel-track">
              {projects.map((project, index) => {
                const position = getCardPosition(index);
                const isCenter = position === 0;
                const isVisible = Math.abs(position) <= 1;
                
                return (
                  <div 
                    key={project.id}
                    className={`carousel-card ${isCenter ? 'carousel-card-active' : ''} ${!isVisible ? 'carousel-card-hidden' : ''}`}
                    style={{ 
                      transform: `translateX(${position * 110}%) scale(${isCenter ? 1 : 0.85})`,
                      opacity: isCenter ? 1 : (isVisible ? 0.6 : 0),
                      zIndex: isCenter ? 10 : (isVisible ? 5 : 1),
                      pointerEvents: isCenter ? 'auto' : (isVisible ? 'auto' : 'none')
                    }}
                    onClick={() => {
                      if (!isCenter && isVisible) {
                        if (position === 1) nextSlide();
                        else if (position === -1) prevSlide();
                      }
                    }}
                  >
                    <div className="project-card">
                      <div className="project-image-container">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="project-image"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className="project-image-placeholder" style={{ display: 'none' }}>
                          <span className="project-image-icon">🚀</span>
                        </div>
                      </div>
                      <div className="project-info">
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-description">{project.description}</p>
                        <div className="project-tech">
                          {project.tech.map((tech, techIdx) => (
                            <span key={techIdx} className="tech-tag">{tech}</span>
                          ))}
                        </div>
                        <a 
                          href={project.link === "confidential" ? "#" : project.link}
                          className={`project-link ${project.link === "confidential" ? "confidential" : ""}`}
                          target="_blank" 
                          rel="noopener noreferrer"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (project.link === "confidential") {
                              e.preventDefault();
                            }
                          }}
                        >
                          {project.link === "confidential" ? "Confidential" : "View Project →"}
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <button 
            className="carousel-btn carousel-btn-next" 
            onClick={nextSlide}
            disabled={isAnimating}
          >
            ›
          </button>
        </div>
        
        <div className="carousel-indicators">
          {projects.map((_, idx) => (
            <button
              key={idx}
              className={`carousel-dot ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => !isAnimating && setCurrentIndex(idx)}
              disabled={isAnimating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

/* =======================
   Certificates Section
======================= */
const Certificates = ({ showContent }) => {
  const certificates = [
    {
      id: 1,
      title: "AWS Cloud Mentoring DigiLearn",
      issuer: "AWS / DigiLearn",
      date: "January 19, 2026",
      link: null,
      image: "/aws-digilearn.png"
    },
    {
      id: 2,
      title: "Google Cloud Fundamentals: Core Infrastructure",
      issuer: "Google Cloud Skills Boost",
      date: "June 13, 2025",
      link: "https://www.skills.google/public_profiles/34ba3737-2659-4ad0-8579-8ff4e767bc7b/badges/16428820",
      image: "/gcp-ml-ai.png"
    },
    {
      id: 3,
      title: "Google Cloud Computing Foundations: Data, ML, and AI",
      issuer: "Google Cloud",
      date: "June 11, 2025",
      link: "https://www.skills.google/public_profiles/34ba3737-2659-4ad0-8579-8ff4e767bc7b/badges/16428820",
      image: "/gcp-infra.png"
    },
    {
      id: 4,
      title: "Accelerating End-to-End Data Science Workflows",
      issuer: "NVIDIA",
      date: "September 10, 2024",
      link: "https://learn.nvidia.com/certificates?id=etE8zBL4QGCFclWci2LeyQ",
      image: "/nvidia-data-science.png"
    },
    {
      id: 5,
      title: "Getting Started with AI",
      issuer: "NVIDIA",
      date: "September 9, 2024",
      link: "https://learn.nvidia.com/certificates?id=bZMseMYKRXyqmbZMxXXdMg",
      image: "/nvidia-ai.png"
    },
    {
      id: 6,
      title: "Machine Learning with Python",
      issuer: "Cognitive Class",
      date: "March 16, 2025",
      link: "https://courses.cognitiveclass.ai/certificates/fc9228d6d71140e18a25f87128b070f2",
      image: "/cognitive-class-ml.png"
    },
    {
      id: 7,
      title: "Computer Vision Onramp",
      issuer: "MATLAB Academy",
      date: "June 4, 2024",
      link: "https://matlabacademy.mathworks.com/progress/report.pdf?course=orcv&release=v1&language=en",
      image: "/matlab-cv.png"
    },
    {
      id: 8,
      title: "Python Programming",
      issuer: "Udemy",
      date: "June 2, 2023",
      link: "https://www.udemy.com/certificate/UC-b21e49ea-d49c-4dd1-a467-093a7ee7b4a8/",
      image: "/udemy-python.png"
    },
    {
      id: 9,
      title: "CCNA: Introduction to Networks",
      issuer: "Cisco",
      date: "December 13, 2024",
      link: "https://www.credly.com/badges/8a82dba0-2b3a-4259-8e7e-93797a4dde3f/linked_in_profile",
      image: "/cisco-itn.png"
    },
    {
      id: 10,
      title: "CCNA: Switching, Routing, and Wireless Essentials",
      issuer: "Cisco",
      date: "December 13, 2024",
      link: "https://www.credly.com/badges/46824321-1535-4f70-ad6d-7f51ab456ad6/linked_in_profile",
      image: "/cisco-srwe.png"
    },
    {
      id: 11,
      title: "CCNAV7: Enterprise Networking, Security, and Automation",
      issuer: "Cisco",
      date: "July 25, 2024",
      link: "https://www.credly.com/badges/212e20e4-e742-472d-9073-113d18aad684/linked_in_profile",
      image: "/cisco-ensa.png"
    },
    {
      id: 12,
      title: "Ethical Hacker",
      issuer: "Cisco",
      date: "January 23, 2025",
      link: "https://www.credly.com/badges/462d15a7-02e9-455c-9b04-07d9b8d2b375/linked_in_profile",
      image: "/cisco-eh.png"
    },
    {
      id: 13,
      title: "CS50's Introduction to Cybersecurity",
      issuer: "Harvard / edX",
      date: "January 21, 2024",
      link: "https://credentials.edx.org/credentials/5e0ea4b0bac74be200d672e6c172055a/",
      image: "/edx-cs50-cybersecurity.png"
    }
  ];

  return (
    <section id="certificates" className={`certificates-section ${showContent ? 'section-visible' : ''}`}>
      <div className="section-container">
        <h2 className="section-title">Certificates</h2>
        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <div 
              key={cert.id} 
              className="certificate-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Image Layer (hidden by default, shows on hover) */}
              <div className="certificate-bg-image">
                <img src={cert.image} alt={cert.issuer} />
              </div>

              {/* Default Content Layer */}
              <div className="certificate-default-content">
                <div className="certificate-content">
                  <h3 className="certificate-title">{cert.title}</h3>
                  <p className="certificate-issuer">{cert.issuer}</p>
                  <p className="certificate-date">{cert.date}</p>
                </div>
              </div>

              {/* Static Button at Bottom Left */}
              <div className="certificate-button-container">
                {cert.link ? (
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="certificate-link"
                  >
                    View Certificate →
                  </a>
                ) : (
                  <div className="certificate-badge">Certificate</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* =======================
   Contact Section
======================= */
const Contact = ({ showContent }) => {
  const contactInfo = [
    {
      id: 1,
      name: "GitHub",
      icon: FaGithub,
      link: "https://github.com/Apizuu"
    },
    {
      id: 2,
      name: "LinkedIn",
      icon: FaLinkedin,
      link: "https://linkedin.com/in/hafizyahrayhan"
    },
    {
      id: 3,
      name: "Email",
      icon: MdEmail,
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=rayhanzulikhram@gmail.com"
    }
  ];

  return (
    <section id="contact" className={`contact-section ${showContent ? 'section-visible' : ''}`}>
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-cards-container">
          {contactInfo.map((contact, index) => {
            const IconComponent = contact.icon;
            return (
              <a
                key={contact.id}
                href={contact.link}
                className="contact-card"
                style={{ animationDelay: `${index * 0.1}s` }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconComponent className="contact-card-icon" />
                <span className="contact-card-name">{contact.name}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* =======================
   Footer
======================= */
const Footer = ({ showContent }) => (
  <footer className={`footer ${showContent ? 'footer-visible' : ''}`}>
    <div className="container footer-container">
      <p className="footer-text">
        © 2024 Hafizyah Rayhan. Built with React + Vite
      </p>
    </div>
  </footer>
);

/* =======================
   MAIN APP
======================= */
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [logoState, setLogoState] = useState('loading');
  const [showContent, setShowContent] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  const handleLoadingComplete = () => {
    setLogoState('transitioning');

    setTimeout(() => {
      setIsLoading(false);
      setShowContent(true);
    }, 100);

    setTimeout(() => {
      setShowNavbar(true);
    }, 300);

    setTimeout(() => {
      setLogoState('navbar');
    }, 1800);
  };

  return (
    <div className="app">
      <LoadingScreen
        isLoading={isLoading}
        onLoadingComplete={handleLoadingComplete}
      />

      {logoState !== 'navbar' && (
        <div className={`logo-unified logo-state-${logoState}`}>
          <LogoImage />
        </div>
      )}

      <MovingStars />

      <Header
        showNavbar={showNavbar}
        logoState={logoState}
      />

      <Hero showContent={showContent} />
      
      {/* Tech Stack Section with Title */}
      <section className={`tech-stack-wrapper ${showContent ? 'section-visible' : ''}`}>
        <div className="section-container">
          <h2 className="section-title">Tech Stack</h2>
        </div>
        <TechStackCarousel showContent={showContent} />
      </section>

      <Experience showContent={showContent} />
      <Projects showContent={showContent} />
      <Certificates showContent={showContent} />
      <Contact showContent={showContent} />
      <Footer showContent={showContent} />
    </div>
  );
}

export default App;