import { Card, Container } from "react-bootstrap";
import { ProjectsData } from "../../data/projects.js";
import "./Projects.css";

function Projects() {
  return (
    <Container className="Projects">
      {ProjectsData.map((project, key) => {
        return (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={project.github_url}
          >
            <Card key={key} className={project.cName}>
              <Card.Img
                variant="top"
                src={require(`../../images/${project.id}`).default}
                alt={project.name}
              />
              <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
              </Card.Body>
            </Card>
          </a>
        );
      })}
    </Container>
  );
}
export default Projects;
