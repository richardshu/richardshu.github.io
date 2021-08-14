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
            I'm a software engineer at Roblox based in LA. Previously, I wrote
            code at JPMorgan, taught Data Structures and Algorithms at NYU, and
            helped organize the 2019 and 2020 cycles of HackNYU.
          </p>

          <p>
            Originally from Diamond Bar, California, I entered college at the
            tender age of 14 through Cal State LA's Early Entrance Program. I
            then transferred to NYU and spent my senior fall abroad in Shanghai
            studying calligraphy and dance.
          </p>

          <p>
            I have a diverse repertoire of interests that include playing{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.uschess.org/msa/MbrDtlMain.php?14612952"
            >
              chess
            </a>
            , making{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://youtube.com/RichardShuProductions"
            >
              YouTube
            </a>{" "}
            videos, writing on{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.quora.com/profile/Richard-Shu-7"
            >
              Quora
            </a>{" "}
            and{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://medium.com/@richardshu1"
            >
              Medium
            </a>
            , and hosting a{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://itsoverpod.com/"
            >
              podcast
            </a>
            . I also love absorbing nature through hiking and{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/richard.shu.productions/"
            >
              photography
            </a>
            .
          </p>

          <p>
            If you ever want to reach me, my inbox is always open at richardjshu
            (at) gmail (dot) com. Please don't hesitate to get in touch.
          </p>
        </div>
      </div>
    </Container>
  );
}

export default Home;
