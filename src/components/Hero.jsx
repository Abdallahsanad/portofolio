import abdallahImage from '../assets/images/abdallah.jpeg';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h3 className="reveal">Hello, I'm</h3>
        <h1 className="reveal"><span className="highlight">Abdallah Ali</span></h1>
        <p className="title reveal">Full-Stack Developer <span className="highlight">(.NET & Angular)</span></p>
        <p className="description reveal">Am a Full-Stack Developer specializing in Angular and ASP.NET Core. Highly proficient in 
            implementing robust architectures using advanced Design Patterns to ensure code scalability 
            and maintainability. Skilled in methodical problem-solving and dedicated to following industry 
            best practices to deliver high-quality software solutions</p>
            <br />

        <div className="social-links reveal">
            <a href="https://github.com/Abdallahsanad" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
            <a href="https://linkedin.com/in/abdallah-ali-sanad" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
            <a href="mailto:abdallahsanadabo@gmail.com"><i className="fas fa-envelope"></i></a>
        </div>
      </div>
      <div className="hero-image reveal">
        <div className="img-box">
            <img src={abdallahImage} alt="Abdallah Ali" />
        </div>
      </div>
    </section>
  );
}
