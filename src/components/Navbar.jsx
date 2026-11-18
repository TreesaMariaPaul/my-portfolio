
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        My Portfolio
      </Link>

      <div className="nav-links">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/education">Education</NavLink>
        <NavLink to="/professional-knowledge">
          Professional Knowledge
        </NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/picture-gallery">Picture Gallery</NavLink>
        <NavLink to="/video-gallery">Video Gallery</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/readme">Readme</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
