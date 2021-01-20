import { Container } from "react-bootstrap";
import ProfilePic from "../../images/profile-pic.jpg";
import "./Home.css";

function Home() {
  return (
    <Container className="Home">
      <div className="profile-container">
        <span className="pfp-container">
          <img src={ProfilePic} alt="Profile Pic" />
        </span>
        <div className="bio">
          <h1 className="greeting">Hi, I'm Richard.</h1>
          <p>
            Originally from Diamond Bar, California, I entered college at the
            tender age of 14 through Cal State LA's Early Entrance Program and
            transferred to NYU to pursue bigger dreams. I spent my senior fall
            abroad in Shanghai studying calligraphy and dance to expand my
            cultural palate and explore the riveting facets of Chinese culture.
          </p>
          <p>
            Previously, I wrote code at JPMorgan under the investment banking
            division. I also taught Data Structures and Algorithms during the
            school year and helped organize the 2019 and 2020 cycles of HackNYU.
          </p>
          <p>
            I have a diverse repertoire of interests that include playing chess,
            writing about my experiences, hosting a podcast, and making YouTube
            videos. I also love absorbing nature through hiking and photography.
          </p>
          <p>
            If you ever want to reach me, my inbox is always open at richardjshu
            (at) gmail (dot) com. Please don’t hesitate to get in touch.
          </p>
        </div>
      </div>
    </Container>
  );
}

export default Home;
