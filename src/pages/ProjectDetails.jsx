import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { projects } from '../data/projects';
import useGlobalReveal from '../hooks/useGlobalReveal';
import Footer from '../components/Footer';

export default function ProjectDetails() {
  useGlobalReveal();
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="details-page">
        <h2 className="details-title">Project Not Found</h2>
        <Link to="/" className="back-btn">Back to Home</Link>
      </div>
    );
  }

  const galleryImages = project.images?.length ? project.images : [];
  const descriptionBlocks = (project.fullDescription || project.shortDescription)
    .split('\n')
    .map((block) => block.trim())
    .filter(Boolean);
  const projectStats = [
    { label: 'Stack', value: project.technologies?.length || 0 },
    { label: 'Features', value: project.features?.length || 0 },
    { label: 'Media', value: galleryImages.length + (project.videoLink ? 2 : 1) },
  ];

  return (
    <>
      <div className="details-page">
        <div className="details-header reveal">
          <Link to="/#projects" className="back-btn"><i className="fas fa-arrow-left"></i> Back to Projects</Link>
        </div>
        
        <div className="details-hero reveal">
          <span className="details-kicker">Project Details</span>
          <h1 className="details-title">{project.title}</h1>
          <p>{project.shortDescription}</p>

          <div className="details-metrics">
            {projectStats.map((stat) => (
              <div className="metric-card" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="details-actions hero-actions">
            {project.codeLink && (
              <a href={project.codeLink} target="_blank" rel="noreferrer" className="details-btn">
                <i className="fab fa-github"></i> View Code
              </a>
            )}
            {project.liveLink && (
              <a href={project.liveLink} target="_blank" rel="noreferrer" className="details-btn">
                <i className="fas fa-external-link-alt"></i> Live Demo
              </a>
            )}
          </div>
        </div>
        
        <div className="details-showcase reveal">
          <div className="showcase-bar">
            <div>
              <span className="status-dot"></span>
              <span>Visual Case Study</span>
            </div>
            <span>{project.title}</span>
          </div>

          <div className="details-media-main">
            <div className="media-frame">
              <img src={project.mainImage} alt={project.title} />
            </div>
          </div>

          {project.videoLink && (
            <div className="details-video">
              <video src={project.videoLink} controls preload="metadata" poster={project.mainImage} />
            </div>
          )}

          {galleryImages.length > 0 && (
            <div className="gallery-grid">
              {galleryImages.map((image, index) => (
                <img
                  key={`${project.slug}-${index}`}
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        <div className="details-content">
          <div className="details-info reveal">
            <section className="details-panel">
              <div className="panel-heading">
                <span className="panel-icon"><i className="fas fa-layer-group"></i></span>
                <h3>Description</h3>
              </div>
              <div className="description-copy">
                {descriptionBlocks.map((block, index) => (
                  <p key={`${project.slug}-description-${index}`}>{block}</p>
                ))}
              </div>
            </section>
            
            {project.technologies && project.technologies.length > 0 &&(
              <section className="details-panel">
                <div className="panel-heading">
                  <span className="panel-icon"><i className="fas fa-code"></i></span>
                  <h3>Technologies Used</h3>
                </div>
                <div className="tech-tags">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </section>
            )}

            {project.features && project.features.length > 0 && (
              <section className="details-panel">
                <div className="panel-heading">
                  <span className="panel-icon"><i className="fas fa-bolt"></i></span>
                  <h3>Features</h3>
                </div>
                <ul className="feature-list">
                  {project.features.map((feature, index) => (
                    <li key={index} className="feature-item">{feature}</li>
                  ))}
                </ul>
              </section>
            )}

            {project.challenges && (
              <section className="details-panel">
                <div className="panel-heading">
                  <span className="panel-icon"><i className="fas fa-shield-alt"></i></span>
                  <h3>Challenges / Notes</h3>
                </div>
                <p>{project.challenges}</p>
              </section>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
