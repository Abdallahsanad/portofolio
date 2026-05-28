import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Cursor from './components/Cursor';
import BackgroundMesh from './components/BackgroundMesh';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';

function App() {
  useEffect(() => {
    // Prevent right-click context menu
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener('contextmenu', handleContextMenu);

    // Prevent common inspection keyboard shortcuts
    const handleKeyDown = (e) => {
      if (
        e.key === 'F12' || 
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) || 
        (e.ctrlKey && e.key === 'U')
      ) {
        e.preventDefault();
        return false;
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <Cursor />
      <BackgroundMesh />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetails />} />
      </Routes>
    </>
  );
}

export default App;
