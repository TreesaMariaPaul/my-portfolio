import PageNavigation from "../components/PageNavigation";
import Card from "../components/Card";
import professionalKnowledgeData from "../data/professionalknowledge.json";
function ProfessionalKnowledge() {
  return (
    <main className="professional-page">
      <div className="professional-header">
        <span className="professional-label">PROFESSIONAL KNOWLEDGE</span>

        <h1>
          My <span>Knowledge</span>
        </h1>

        <p className="professional-intro">
          My academic experience and practical projects have helped me develop
          knowledge in programming, web development, databases, software
          engineering, and modern application technologies.
        </p>
      </div>

      <div className="professional-timeline">
        {professionalKnowledgeData.map((item) => (
          <Card className="professional-card" key={item.id}>
            <div className="professional-number">{item.number}</div>

            <div className="professional-content">
              <h2>{item.title}</h2>

              <p>{item.description}</p>

              <span className="professional-result">{item.technologies}</span>
            </div>
          </Card>
        ))}
      </div>

      <PageNavigation
        previous="/education"
        previousLabel="Education"
        next="/blog"
        nextLabel="Blog"
      />
    </main>
  );
}

export default ProfessionalKnowledge;
