import PageNavigation from "../components/PageNavigation"

function Readme() {
  return (
    <main className="readme-page">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="readme-header">

        <span className="readme-label">
          PROJECT DOCUMENTATION
        </span>

        <h1>
          Portfolio <span>Readme</span>
        </h1>

        <p className="readme-intro">
          An overview of the structure, technologies, features,
          development process, and software evolution of my
          digital portfolio.
        </p>

      </div>


      {/* =====================================================
          README SECTIONS
      ===================================================== */}

      <div className="readme-sections">


        {/* =================================================
            01 - PORTFOLIO OVERVIEW
        ================================================= */}

        <section className="readme-card">

          <span className="readme-number">
            01
          </span>

          <div>

            <h2>
              Portfolio Overview
            </h2>

            <p>
              This digital portfolio is a React-based web
              application created to present my academic
              background, professional knowledge, software
              projects, learning experiences, and personal
              interests.
            </p>

            <p>
              The portfolio uses a multi-page structure with
              consistent navigation, responsive layouts,
              reusable components, and interactive features.
            </p>

            <p>
              The application was developed incrementally,
              allowing new pages, features, improvements, and
              design changes to be introduced throughout the
              development process.
            </p>

          </div>

        </section>


        {/* =================================================
            02 - PORTFOLIO STRUCTURE
        ================================================= */}

        <section className="readme-card">

          <span className="readme-number">
            02
          </span>

          <div>

            <h2>
              Portfolio Structure
            </h2>

            <ul className="readme-list">

              <li>
                <strong>Home:</strong> Introduction to the
                portfolio and an overview of my software
                engineering journey.
              </li>

              <li>
                <strong>About:</strong> Personal introduction,
                interests, goals, and areas of interest.
              </li>

              <li>
                <strong>Education:</strong> Academic background,
                BCA studies, and current postgraduate education.
              </li>

              <li>
                <strong>Professional Knowledge:</strong>
                Technical knowledge, programming skills,
                software development concepts, and technologies.
              </li>

              <li>
                <strong>Blog:</strong> A section for sharing
                learning experiences, technical topics, and
                software-related content.
              </li>

              <li>
                <strong>Readme:</strong> Project documentation
                describing the portfolio, technologies,
                development process, and software evolution.
              </li>

            </ul>

          </div>

        </section>


        {/* =================================================
            03 - TECHNOLOGIES USED
        ================================================= */}

        <section className="readme-card">

          <span className="readme-number">
            03
          </span>

          <div>

            <h2>
              Technologies Used
            </h2>

            <div className="technology-tags">

              <span>React</span>
              <span>JavaScript</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>Vite</span>
              <span>React Router</span>

            </div>

            <p>
              React is used to build the user interface through
              reusable components and individual pages.
              JavaScript provides the application functionality
              and interactive behaviour.
            </p>

            <p>
              HTML provides the structure of the application,
              while CSS is used for styling, layouts,
              animations, responsive design, and visual
              presentation.
            </p>

            <p>
              Vite is used as the development and build tool,
              while React Router is used to provide navigation
              between the different portfolio pages.
            </p>

          </div>

        </section>


        {/* =================================================
            04 - SOFTWARE EVOLUTION
        ================================================= */}

        <section className="readme-card evolution-card">

          <span className="readme-number">
            04
          </span>

          <div>

            <h2>
              Software Evolution
            </h2>

            <p>
              The portfolio was developed through an
              incremental software evolution process. The
              application was progressively modified,
              extended, reorganised, and improved as new
              requirements and ideas were introduced.
            </p>

            <p>
              The development process can be represented
              through the following stages:
            </p>


            <div className="evolution-timeline">


              {/* STEP 01 */}

              <div className="evolution-step">

                <span>01</span>

                <div>

                  <h3>
                    Initial Version
                  </h3>

                  <p>
                    The initial portfolio structure and basic
                    content were established as the starting
                    point of the application.
                  </p>

                </div>

              </div>


              {/* STEP 02 */}

              <div className="evolution-step">

                <span>02</span>

                <div>

                  <h3>
                    Portfolio Pages
                  </h3>

                  <p>
                    Individual sections such as Home, About,
                    Education, Professional Knowledge, Blog,
                    and Readme were introduced.
                  </p>

                </div>

              </div>


              {/* STEP 03 */}

              <div className="evolution-step">

                <span>03</span>

                <div>

                  <h3>
                    React Component Structure
                  </h3>

                  <p>
                    The application was organised into React
                    pages and reusable components to improve
                    structure, readability, and maintainability.
                  </p>

                </div>

              </div>


              {/* STEP 04 */}

              <div className="evolution-step">

                <span>04</span>

                <div>

                  <h3>
                    React Router Navigation
                  </h3>

                  <p>
                    React Router was introduced to provide
                    structured navigation between the different
                    portfolio pages.
                  </p>

                </div>

              </div>


              {/* STEP 05 */}

              <div className="evolution-step">

                <span>05</span>

                <div>

                  <h3>
                    Reusable Components
                  </h3>

                  <p>
                    Common functionality such as the navigation
                    bar and page navigation was separated into
                    reusable React components.
                  </p>

                </div>

              </div>


              {/* STEP 06 */}

              <div className="evolution-step">

                <span>06</span>

                <div>

                  <h3>
                    Interactive Features
                  </h3>

                  <p>
                    Interactive functionality was progressively
                    introduced as new features were developed
                    for the portfolio.
                  </p>

                </div>

              </div>


              {/* STEP 07 */}

              <div className="evolution-step">

                <span>07</span>

                <div>

                  <h3>
                    Visual and Responsive Improvements
                  </h3>

                  <p>
                    The interface was progressively improved
                    through responsive layouts, consistent
                    styling, hover effects, navigation controls,
                    and improved content presentation.
                  </p>

                </div>

              </div>


              {/* STEP 08 */}

              <div className="evolution-step">

                <span>08</span>

                <div>

                  <h3>
                    Content and Structure Refinement
                  </h3>

                  <p>
                    The portfolio structure was refined by
                    reviewing the pages, organising the project
                    files, removing unnecessary sections, and
                    improving the overall content and navigation.
                  </p>

                </div>

              </div>


              {/* STEP 09 */}

              <div className="evolution-step evolution-final">

                <span>09</span>

                <div>

                  <h3>
                    Current Portfolio
                  </h3>

                  <p>
                    The current version combines multiple React
                    pages, reusable components, structured
                    navigation, responsive design, and project
                    documentation.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =================================================
            05 - SOFTWARE EVOLUTION TAXONOMY
        ================================================= */}

        <section className="readme-card">

          <span className="readme-number">
            05
          </span>

          <div>

            <h2>
              Software Evolution Taxonomy
            </h2>

            <p>
              The changes made during the development of the
              portfolio can be related to common software
              evolution categories.
            </p>


            <div className="taxonomy-grid">


              <div className="taxonomy-item">

                <h3>
                  Corrective Evolution
                </h3>

                <p>
                  Corrective changes involve identifying and
                  fixing problems in the existing software.
                  Layout issues, navigation problems, styling
                  conflicts, and implementation errors were
                  corrected during development.
                </p>

              </div>


              <div className="taxonomy-item">

                <h3>
                  Adaptive Evolution
                </h3>

                <p>
                  Adaptive evolution involves modifying software
                  to meet changing requirements or environments.
                  New pages, navigation features, and
                  functionality were introduced as requirements
                  changed.
                </p>

              </div>


              <div className="taxonomy-item">

                <h3>
                  Perfective Evolution
                </h3>

                <p>
                  Perfective evolution focuses on improving
                  existing functionality and user experience.
                  The portfolio was enhanced through better
                  layouts, responsive design, visual consistency,
                  navigation, and interactive elements.
                </p>

              </div>


              <div className="taxonomy-item">

                <h3>
                  Preventive Evolution
                </h3>

                <p>
                  Preventive evolution focuses on improving
                  maintainability and reducing potential future
                  problems. Reusable components and separate
                  page structures make the application easier
                  to maintain and extend.
                </p>

              </div>


            </div>

          </div>

        </section>


        {/* =================================================
            06 - DEVELOPMENT APPROACH
        ================================================= */}

        <section className="readme-card">

          <span className="readme-number">
            06
          </span>

          <div>

            <h2>
              Development Approach
            </h2>

            <p>
              The portfolio follows a component-based
              development approach. Common functionality is
              separated into reusable components, while
              individual sections are implemented as separate
              React pages.
            </p>

            <p>
              This structure makes the application easier to
              maintain and modify because changes to individual
              pages or reusable components can be made without
              unnecessarily affecting the rest of the application.
            </p>

            <p>
              Responsive design techniques are also used so
              that the portfolio can adapt to different screen
              sizes, including desktop, tablet, and mobile
              devices.
            </p>

          </div>

        </section>


        {/* =================================================
            07 - PROJECT STRUCTURE
        ================================================= */}

        <section className="readme-card">

          <span className="readme-number">
            07
          </span>

          <div>

            <h2>
              Project Structure
            </h2>

            <pre className="project-structure">
{`src/
│
├── components/
│   ├── Navbar.jsx
│   └── PageNavigation.jsx
│
├── pages/
│   ├── About.jsx
│   ├── Blog.jsx
│   ├── Education.jsx
│   ├── Home.jsx
│   ├── ProfessionalKnowledge.jsx
│   └── Readme.jsx
│
├── App.css
├── App.jsx
├── index.css
└── main.jsx

public/
│
└── images/
    └── home-bg.avif

index.html
package.json
package-lock.json
vite.config.js
README.md`}
            </pre>

          </div>

        </section>


        {/* =================================================
            08 - CURRENT FEATURES
        ================================================= */}

        <section className="readme-card">

          <span className="readme-number">
            08
          </span>

          <div>

            <h2>
              Current Features
            </h2>

            <ul className="readme-list">

              <li>
                Multi-page React portfolio
              </li>

              <li>
                React Router navigation
              </li>

              <li>
                Responsive web design
              </li>

              <li>
                Reusable navigation components
              </li>

              <li>
                Custom CSS styling
              </li>

              <li>
                Academic and professional information
              </li>

              <li>
                Blog section
              </li>

              <li>
                Portfolio documentation
              </li>

            </ul>

          </div>

        </section>


        {/* =================================================
            09 - EVOLUTION SUMMARY
        ================================================= */}

        <section className="readme-card evolution-card">

          <span className="readme-number">
            09
          </span>

          <div>

            <h2>
              Evolution Summary
            </h2>

            <p>
              The development of this portfolio demonstrates
              an incremental approach to software evolution.
              New pages, reusable components, visual
              improvements, and functionality were introduced
              throughout the development process.
            </p>

            <p>
              The application structure was progressively
              improved to make the portfolio more organised,
              maintainable, reusable, responsive, and
              user-friendly.
            </p>

            <p>
              The evolution process demonstrates how software
              can be continuously adapted after its initial
              implementation to address new requirements,
              improve existing functionality, correct problems,
              and support future development.
            </p>

          </div>

        </section>


      </div>


      {/* =====================================================
          PAGE NAVIGATION
      ===================================================== */}

      <PageNavigation
        previous="/blog"
        previousLabel="Blog"
        next="/"
        nextLabel="Home"
      />

    </main>
  )
}

export default Readme
