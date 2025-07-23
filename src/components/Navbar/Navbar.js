import StyledNavbar from "./StyledNavbar.js";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <StyledNavbar>
      <div className="container">
        <nav className="navbar">
          <div>
            <h1 className="covidTitle">
              <Link to="/">Covid ID</Link>
            </h1>
          </div>
          <div>
            <ul className="navbar__list">
              <li className="navbar__item">
                <Link to="/">Global</Link>
              </li>
              <li className="navbar__item">
                <Link to="/Indonesia">Indonesia</Link>
              </li>
              <li className="navbar__item">
                <Link to="/Provinsi">Provinsi</Link>
              </li>
              <li className="navbar__item">
                <Link to="/About">About</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </StyledNavbar>
  );
  };

export default Navbar;
