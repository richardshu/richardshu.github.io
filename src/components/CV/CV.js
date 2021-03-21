import { Container } from "react-bootstrap";
import { EducationData } from "../../data/education.js";
import { ExperienceData } from "../../data/experience.js";
import { AwardsData } from "../../data/awards.js";
import "./CV.css";

function CV() {
  return (
    <Container className="CV">
      <h1>Education</h1>
      <ul>
        {EducationData.map((education, key) => {
          return (
            <li key={key}>
              {education.school} – {education.description1}
              <em>{education.description2}</em>
            </li>
          );
        })}
      </ul>

      <h1>Experience</h1>
      <ul>
        {ExperienceData.map((experience, key) => {
          return (
            <li key={key}>
              {experience.company} – {experience.title}
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
