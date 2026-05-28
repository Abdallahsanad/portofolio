import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Journey from '../components/Journey';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import useGlobalReveal from '../hooks/useGlobalReveal';

export default function Home() {
  useGlobalReveal();

  return (
    <>
      <Navbar />
      <Hero />
      <Journey />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
