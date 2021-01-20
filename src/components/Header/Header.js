import { Link } from "react-router-dom";
import Logo from "../../images/logo-transparent.png";
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <Link to="/">
        <img className="logo" src={Logo} alt="Logo" />
      </Link>
      <Link to="/projects">projects</Link>
      <Link to="/CV">cv</Link>
    </div>
  );
}

export default Header;
