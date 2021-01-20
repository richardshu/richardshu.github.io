import { Container } from "react-bootstrap";
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
        <li>
          JPMorgan Chase &#38; Co. – <em>Software Engineer Intern</em>
        </li>
        <li>
          Ya Ya Creations – <em>Software Engineer Intern</em>
        </li>
        <li>
          NYU Computer Science Department – <em>Teaching Assistant</em>
        </li>
        <li>
          HackNYU – <em>Organizer</em>
        </li>
        <li>
          Sabai Software – <em>Software Engineer</em>
        </li>
        <li>
          Cal State LA Student Gov –{" "}
          <em>
            College of Engineering, Computer Science, and Technology
            Representative{" "}
          </em>
        </li>
        <li>
          Pat Brown Institute for Public Affairs – <em>Public Policy Intern</em>
        </li>
      </ul>

      <h1>Awards</h1>
      <ul>
        <li>USCF Chess Expert</li>
        <li>Eagle Scout</li>
        <li>TEDxNYU "The Pitch" Speaker</li>
        <li>NYU 2020 Computer Science &#38; Engineering Leadership Award</li>
        <li>HackNYU '20 Judge</li>
        <li>1st, NYU SuperHacks '18</li>
        <li>3rd, HackNY '18</li>
        <li>Top 5, Best Entertainment Hack, PennApps '19</li>
        <li>Top 10, HopHacks '18</li>
        <li>Top 100 Chess Player in the U.S. for ages 14, 15, 16, 17, 18</li>
        <li>1st Chair Trombone, California All Southern Honor Band</li>
      </ul>
    </Container>
  );
}

export default CV;
