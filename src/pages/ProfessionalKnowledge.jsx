import PageNavigation from "../components/PageNavigation"


function ProfessionalKnowledge() {
  return (
    <main className="professional-page">

      <div className="professional-header">

        <span className="professional-label">
          PROFESSIONAL KNOWLEDGE
        </span>

        <h1>
          My <span>Knowledge</span>
        </h1>

        <p className="professional-intro">
          My academic experience and practical projects have helped me
          develop knowledge in programming, web development, databases,
          software engineering, and modern application technologies.
        </p>

      </div>


      <div className="professional-timeline">

        {/* Programming Languages */}

        <div className="professional-card">

          <div className="professional-number">
            01
          </div>

          <div className="professional-content">

            <h2>
              Programming Languages
            </h2>

            <p>
              I have developed a foundation in programming through
              academic learning and practical projects. I have
              experience with different programming languages and
              understand fundamental programming concepts and
              problem-solving techniques.
            </p>

            <span className="professional-result">
              C++ · Java · Python · JavaScript · PHP
            </span>

          </div>

        </div>


        {/* Frontend Development */}

        <div className="professional-card">

          <div className="professional-number">
            02
          </div>

          <div className="professional-content">

            <h2>
              Frontend Development
            </h2>

            <p>
              I have knowledge of creating responsive and interactive
              web interfaces using modern frontend technologies. I
              understand component-based development, page structure,
              styling, navigation, and user interface design.
            </p>

            <span className="professional-result">
              HTML · CSS · JavaScript · React
            </span>

          </div>

        </div>


        {/* Backend Development */}

        <div className="professional-card">

          <div className="professional-number">
            03
          </div>

          <div className="professional-content">

            <h2>
              Backend Development
            </h2>

            <p>
              I have knowledge of backend application development and
              understand how frontend applications communicate with
              server-side systems. I have worked with frameworks and
              technologies used to build functional web applications.
            </p>

            <span className="professional-result">
              Node.js · Django · PHP
            </span>

          </div>

        </div>


        {/* Database Management */}

        <div className="professional-card">

          <div className="professional-number">
            04
          </div>

          <div className="professional-content">

            <h2>
              Database Management
            </h2>

            <p>
              I have experience working with relational databases and
              understand database structures, tables, relationships,
              SQL queries, data management, and connecting databases
              with applications.
            </p>

            <span className="professional-result">
              MySQL · SQL · Database Design
            </span>

          </div>

        </div>


        {/* Software Engineering */}

        <div className="professional-card">

          <div className="professional-number">
            05
          </div>

          <div className="professional-content">

            <h2>
              Software Engineering
            </h2>

            <p>
              I have developed an understanding of software
              development practices through academic projects,
              including requirements analysis, application design,
              development, testing, debugging, and problem solving.
            </p>

            <span className="professional-result">
              Software Development · Testing · Debugging
            </span>

          </div>

        </div>


        {/* Development Tools */}

        <div className="professional-card">

          <div className="professional-number">
            06
          </div>

          <div className="professional-content">

            <h2>
              Development Tools & Technologies
            </h2>

            <p>
              I am familiar with commonly used development tools and
              technologies for building, testing, managing, and
              maintaining software applications.
            </p>

            <span className="professional-result">
              Git · GitHub · VS Code · REST APIs
            </span>

          </div>

        </div>

      </div>
      
      <PageNavigation previous="/education" previousLabel="Education" next="/blog" nextLabel="Blog" />
    </main>
  )
}

export default ProfessionalKnowledge