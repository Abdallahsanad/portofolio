import { useEffect, useRef } from 'react';

export default function BackgroundMesh() {
  const containerRef = useRef(null);

  useEffect(() => {
    const onMouseMove = (e) => {
      const container = containerRef.current;
      if (!container) return;
      
      const blobs = container.querySelectorAll('.blob');
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      blobs.forEach((blob, index) => {
        const shift = (index + 1) * 25;
        blob.style.transform = `translate(${x * shift}px, ${y * shift}px)`;
      });
    };

    document.addEventListener('mousemove', onMouseMove);
    return () => document.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <div className="mesh-gradient" ref={containerRef}>
      <div className="blob one"></div>
      <div className="blob two"></div>
      <div className="blob three"></div>
      <div className="blob four"></div>
    </div>
  );
}
