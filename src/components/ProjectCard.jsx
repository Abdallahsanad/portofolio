import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
  return (
    <div className="project-card reveal">
      <div className="p-img"><img src={project.mainImage} alt={project.title} /></div>
      <div className="p-info">
        <h3>{project.title}</h3>
        {/* <p>{project.shortDescription}</p> */}
        <br />
        <div className="p-links">
          <a href={project.codeLink} target="_blank" rel="noreferrer" className="details-btn">
            <i className="fab fa-github"></i> Code
          </a>
          <Link to={`/projects/${project.slug}`} className="details-btn">More Details</Link>
        </div>
      </div>
    </div>
  );
}
