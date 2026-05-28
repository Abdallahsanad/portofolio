import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function useGlobalReveal() {
  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });

    // Wait slightly to ensure elements are painted if transitioning pages
    const timeout = setTimeout(() => {
      const elements = document.querySelectorAll('.reveal, .skill-card, .project-card, .contact-box');
      
      elements.forEach(el => {
        if (!el.classList.contains('show')) {
          el.classList.add('hidden');
          observer.observe(el);
        }
      });
    }, 100);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, [location.pathname]);
}
