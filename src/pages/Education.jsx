import PageNavigation from "../components/PageNavigation"

function Education() {
  return (
    <main className="education-page">

      <div className="education-header">

        <span className="education-label">
          ACADEMIC JOURNEY
        </span>

        <h1>
          My <span>Education</span>
        </h1>

        <p className="education-intro">
          My academic journey in computer applications and software
          engineering has helped me build a strong foundation in
          technology and software development.
        </p>

      </div>


      <div className="education-timeline">

        {/* MSc Software Engineering */}

        <div className="education-card">

          <div className="education-year">
            CURRENT
          </div>

          <div className="education-content">

            <h2>
              Master of Science in Software Engineering
            </h2>

            <p className="education-institution">
              University of Limerick, Ireland
            </p>

            <p>
              Currently pursuing my postgraduate studies in Software
              Engineering, developing my knowledge of modern software
              engineering practices, technologies, and development
              methodologies.
            </p>

            <span className="education-result">
              Currently Pursuing
            </span>

          </div>

        </div>


        {/* BCA */}

        <div className="education-card">

          <div className="education-year">
            COMPLETED
          </div>

          <div className="education-content">

            <h2>
              Bachelor of Computer Applications
            </h2>

            <p className="education-institution">
              SCMS School of Technology and Management
            </p>

            <p>
              Completed my undergraduate studies in Computer
              Applications, building a foundation in programming,
              software development, databases, and computer technologies.
            </p>

            <span className="education-result">
              BCA
            </span>

          </div>

        </div>

      </div>
      <PageNavigation previous="/about" previousLabel="About" next="/professional-knowledge" nextLabel="Professional Knowledge" />

    </main>
  )
}

export default Education