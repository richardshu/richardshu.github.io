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
            I'm a software engineer at Google in the Bay Area. Previously, I
            wrote code at Roblox and JPMorgan, taught Data Structures and
            Algorithms at NYU, and helped organize the 2019 and 2020 cycles of
            HackNYU.
          </p>

          <p>
            Originally from Diamond Bar, California, I went to college at 14
            through Cal State LA's Early Entrance Program. I then transferred to
            NYU and spent my senior fall abroad in Shanghai studying calligraphy
            and dance.
          </p>

          <p>
            In my free time, I like to play tennis, golf, and{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.uschess.org/msa/MbrDtlMain.php?14612952"
            >
              chess
            </a>
            . I also like to thrift. When I'm feeling creative, I make{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/c/RichardShu"
            >
              YouTube
            </a>{" "}
            videos, write on{" "}
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
            , and post my{" "}
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
            If you ever want to reach me, feel free to shoot me an email at
            richardjshu [at] gmail [dot] com.
          </p>
        </div>
      </div>
    </Container>
  );
}

export default Home;
