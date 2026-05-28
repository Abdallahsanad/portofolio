import { useEffect, useRef, useState } from 'react';

export default function Cursor() {
  const cursorRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMouseMove = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    const onMouseOver = (e) => {
      if (e.target.closest('a, button, .project-card, .details-btn, .cv-btn, .skill-card')) {
        setIsHovering(true);
      }
    };

    const onMouseOut = (e) => {
      if (e.target.closest('a, button, .project-card, .details-btn, .cv-btn, .skill-card')) {
        setIsHovering(false);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
    };
  }, []);

  return (
    <div 
      ref={cursorRef} 
      className="cursor" 
      style={{
        transform: isHovering ? 'scale(2.5)' : 'scale(1)',
        background: isHovering ? 'rgba(0, 242, 255, 0.1)' : 'transparent'
      }}
    />
  );
}
