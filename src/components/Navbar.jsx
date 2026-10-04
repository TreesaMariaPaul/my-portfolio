import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <nav className="navbar">

      <NavLink to="/" end className="logo">
        My Portfolio
      </NavLink>

      <div className="nav-links">

        <NavLink to="/">
          Home
        </NavLink>

        <NavLink to="/about">
          About
        </NavLink>

        <NavLink to="/education">
          Education
        </NavLink>

        <NavLink to="/professional-knowledge">
          Professional Knowledge
        </NavLink>

        <NavLink to="/blog">
          Blog
        </NavLink>


        <NavLink to="/readme">
          Readme
        </NavLink>

      </div>

    </nav>
  )
}

export default Navbar