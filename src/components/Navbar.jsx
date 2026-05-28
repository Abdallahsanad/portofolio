import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const cvUrl = `${import.meta.env.BASE_URL}cv.pdf?v=20260505`;

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <nav>
      <div className="logo">ABDALLAH ALI</div>
      <ul>
        <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a></li>
        <li><a href="#journey" onClick={(e) => handleNavClick(e, 'journey')}>Journey</a></li>
        <li><a href="#skills" onClick={(e) => handleNavClick(e, 'skills')}>Skills</a></li>
        <li><a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a></li>
        <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a></li>
      </ul>
      <div className="nav-actions">
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          <i className={theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'}></i>
        </button>
        <a 
          href={cvUrl} 
          className="cv-btn" 
          download="Abdallah_Ali_Backend_Developer.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download CV
        </a>
      </div>
    </nav>
  );
}
