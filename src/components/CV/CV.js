import { Container } from "react-bootstrap";
import { ExperienceData } from "../../data/experience.js";
import { AwardsData } from "../../data/awards.js";
import "./CV.css";

function CV() {
  return (
    <Container className="CV">
      <h1>Education</h1>
      <ul>
        <li>
          New York University – B.S. Computer Science, <em>magna cum laude</em>
        </li>
        <li>New York University Shanghai – Senior Fall Abroad</li>
      </ul>

      <h1>Experience</h1>
      <ul>
        {ExperienceData.map((experience, key) => {
          return (
            <li key={key}>
              {experience.company} – <em>{experience.title}</em>
            </li>
          );
        })}
      </ul>

      <h1>Awards</h1>
      <ul>
        {AwardsData.map((award, key) => {
          return <li key={key}>{award}</li>;
        })}
      </ul>
    </Container>
  );
}

export default CV;
