import { Link } from "react-router-dom";
function Home() {
  return (
    <main className="home-page">
      <div className="home-content">
        <span className="home-label">SOFTWARE ENGINEERING PORTFOLIO</span>

        <h1>
          Hello, I'm
          <br />
          <span>Treesa Maria Paul</span>
        </h1>

        <p className="home-description">
          Passionate about <strong>software engineering</strong>, creative
          problem-solving, and developing innovative digital solutions that
          combine technology with meaningful user experiences.
        </p>

        <p className="home-description">
          Explore my academic journey, technical expertise, projects, and
          experiences as I continue to develop my skills and grow as a software
          professional.
        </p>

        <div className="home-buttons">
          <Link to="/about" className="btn">
            About Me
          </Link>

          <Link to="/professional" className="btn btn-outline">
            Explore My Skills
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Home;
