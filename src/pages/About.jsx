import PageNavigation from "../components/PageNavigation"

function About() {
  return (
    <main className="about-page">

      <div className="about-header">

        <span className="about-label">
          GET TO KNOW ME
        </span>

        <h1>
          About <span>Me</span>
        </h1>

        <p className="about-intro">
          I am Treesa Maria Paul, a Software Engineering student
          with a passion for technology, software development, and
          continuous learning.
        </p>

      </div>

      <div className="about-grid">

        <section className="about-card">
          <h2>Who I Am</h2>

          <p>
            I am an enthusiastic and motivated software engineering
            student who enjoys exploring how technology can be used
            to create useful and engaging digital solutions.
          </p>

          <p>
            My academic journey has helped me develop an interest
            in programming, web development, software engineering,
            and modern technologies.
          </p>
        </section>

        <section className="about-card">
          <h2>My Interests</h2>

          <p>
            I am particularly interested in software development,
            web technologies, problem-solving, and learning new
            programming concepts.
          </p>

          <div className="interest-tags">
            <span>Software Development</span>
            <span>Web Development</span>
            <span>Programming</span>
            <span>Technology</span>
            <span>Problem Solving</span>
          </div>
        </section>

        <section className="about-card about-goal">
          <h2>My Goal</h2>

          <p>
            My goal is to continuously improve my technical and
            professional skills, gain practical experience, and
            develop innovative software solutions that can make
            a meaningful impact.
          </p>
        </section>

      </div>

      <PageNavigation
        previous="/"
        previousLabel="Home"
        next="/education"
        nextLabel="Education"
      />

    </main>
  )
}

export default About