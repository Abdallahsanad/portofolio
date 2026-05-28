export default function Skills() {
  return (
    <section id="skills" className="skills">
      <h2 className="section-title">TECHNICAL <span> SKILLS</span></h2>
      <div className="skills-grid">
        <div className="skill-card reveal">
            <i className="fas fa-terminal"></i>
            <h3>Languages</h3>
            <p>C#, Java, SQL, Python, JavaScript (ES6+)</p>
        </div>
        <div className="skill-card reveal">
            <i className="fab fa-angular"></i>
            <h3>Front-End</h3>
            <p>Angular (v14+), TypeScript, HTML5, CSS3, Bootstrap</p>
        </div>
        <div className="skill-card reveal">
            <i className="fas fa-server"></i>
            <h3>Back-End</h3>
            <p>ASP.NET Core Web API, MVC, EF Core, LINQ, Django</p>
        </div>
        <div className="skill-card reveal">
            <i className="fas fa-database"></i>
            <h3>Database</h3>
            <p>MS SQL Server, PostgreSQL, Redis</p>
        </div>
        <div className="skill-card reveal">
            <i className="fas fa-tools"></i> 
            <h3>Tools & Version Control</h3>
            <p>Git, GitHub, Postman</p>
        </div>
        <div className="skill-card reveal">
            <i className="fas fa-user-check"></i>
            <h3>Soft Skills</h3>
            <p>Problem-Solving, Clean Code, Collaboration, Adaptability</p>
        </div>
      </div>
    </section>
  );
}
