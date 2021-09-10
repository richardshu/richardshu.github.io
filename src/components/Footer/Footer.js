import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faQuora,
  faMediumM,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import "./Footer.css";

function Footer() {
  return (
    <footer className="Footer">
      <a href="mailto:richardjshu@gmail.com">
        <FontAwesomeIcon className="icon" icon={faEnvelope} />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/richardjshu/"
      >
        <FontAwesomeIcon className="icon" icon={faLinkedin} />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/richardshu"
      >
        <FontAwesomeIcon className="icon" icon={faGithub} />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.youtube.com/c/RichardShu"
      >
        <FontAwesomeIcon className="icon" icon={faYoutube} />
      </a>

      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.quora.com/profile/Richard-Shu-7"
      >
        <FontAwesomeIcon className="icon" icon={faQuora} />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://medium.com/@richardshu1"
      >
        <FontAwesomeIcon className="icon" icon={faMediumM} />
      </a>
    </footer>
  );
}

export default Footer;
