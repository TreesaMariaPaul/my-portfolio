
import PageNavigation from "../components/PageNavigation";
import Card from "../components/Card";
import educationData from "../data/education.json";

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
        {educationData.map((education) => (
          <Card className="education-card" key={education.id}>
            <div className="education-year">
              {education.year}
            </div>

            <div className="education-content">
              <h2>
                {education.qualification}
              </h2>

              <p className="education-institution">
                {education.institution}
              </p>

              <p>
                {education.description}
              </p>

              <span className="education-result">
                {education.result}
              </span>
            </div>
          </Card>
        ))}
      </div>

      <PageNavigation
        previous="/about"
        previousLabel="About"
        next="/professional-knowledge"
        nextLabel="Professional Knowledge"
      />
    </main>
  );
}

export default Education;
