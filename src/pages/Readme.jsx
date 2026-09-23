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
          development process, and software evolution of this
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
              This digital portfolio was developed as a
              React-based web application to present my
              academic background, professional knowledge,
              software projects, learning experiences, and
              development journey.
            </p>

            <p>
              The portfolio was designed as a multi-page
              application with a consistent user interface,
              responsive layouts, interactive features, and
              structured navigation between different sections.
            </p>

            <p>
              The project was developed incrementally, allowing
              new functionality, improvements, and structural
              changes to be introduced throughout the development
              process.
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
                <strong>Education:</strong> Academic background
                and current postgraduate studies.
              </li>

              <li>
                <strong>Professional Knowledge:</strong>
                Technical knowledge, programming skills,
                software development, and technologies.
              </li>

              <li>
                <strong>Gallery:</strong> Collection of
                software projects, development work, and
                academic achievement.
              </li>

              <li>
                <strong>Video Gallery:</strong> Project
                demonstration videos showcasing software
                development work.
              </li>

              <li>
                <strong>Blog:</strong> Articles describing
                software development, learning experiences,
                and technical interests.
              </li>

              <li>
                <strong>Messaging:</strong> An interactive
                messaging facility implemented using React
                state management.
              </li>

              <li>
                <strong>Readme:</strong> Documentation
                describing the portfolio structure,
                technologies, development approach, and
                software evolution.
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
              React is used to develop the user interface
              through reusable components and individual
              pages. JavaScript provides the application
              functionality and interaction.
            </p>

            <p>
              HTML and CSS are used to structure and style
              the application. Vite is used as the development
              and build tool, while React Router provides
              navigation between the different portfolio pages.
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
              This portfolio was developed through an
              incremental software evolution process. Instead
              of treating the application as a single finished
              product, the system was progressively modified,
              extended, refined, and reorganised as new
              requirements and improvements were identified.
            </p>

            <p>
              The evolution of the portfolio can be represented
              through the following development stages:
            </p>


            {/* =============================================
                EVOLUTION TIMELINE
            ============================================= */}

            <div className="evolution-timeline">


              {/* STEP 01 */}

              <div className="evolution-step">

                <span>
                  01
                </span>

                <div>

                  <h3>
                    Initial Version
                  </h3>

                  <p>
                    Basic portfolio pages and content were
                    established as the starting point of the
                    application.
                  </p>

                </div>

              </div>


              {/* STEP 02 */}

              <div className="evolution-step">

                <span>
                  02
                </span>

                <div>

                  <h3>
                    Basic Portfolio Pages
                  </h3>

                  <p>
                    Individual sections such as Home, About,
                    Education, Professional Knowledge, Gallery,
                    Blog, and Readme were introduced.
                  </p>

                </div>

              </div>


              {/* STEP 03 */}

              <div className="evolution-step">

                <span>
                  03
                </span>

                <div>

                  <h3>
                    React Component Structure
                  </h3>

                  <p>
                    The application was reorganised into React
                    pages and reusable components to improve
                    structure and maintainability.
                  </p>

                </div>

              </div>


              {/* STEP 04 */}

              <div className="evolution-step">

                <span>
                  04
                </span>

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

                <span>
                  05
                </span>

                <div>

                  <h3>
                    Reusable Components
                  </h3>

                  <p>
                    Common functionality such as the navigation
                    bar and page navigation was separated into
                    reusable components.
                  </p>

                </div>

              </div>


              {/* STEP 06 */}

              <div className="evolution-step">

                <span>
                  06
                </span>

                <div>

                  <h3>
                    Interactive Features
                  </h3>

                  <p>
                    Interactive functionality was introduced
                    using React state management, including
                    the messaging facility and full-screen
                    image viewing.
                  </p>

                </div>

              </div>


              {/* STEP 07 */}

              <div className="evolution-step">

                <span>
                  07
                </span>

                <div>

                  <h3>
                    Responsive UI Improvements
                  </h3>

                  <p>
                    The visual design was progressively refined
                    with responsive layouts, consistent styling,
                    hover effects, navigation controls, and
                    improved presentation of project content.
                  </p>

                </div>

              </div>


              {/* STEP 08 */}

              <div className="evolution-step">

                <span>
                  08
                </span>

                <div>

                  <h3>
                    Multimedia Integration
                  </h3>

                  <p>
                    The Gallery and Video Gallery were extended
                    to present project images, academic
                    achievement, and software project
                    demonstrations.
                  </p>

                </div>

              </div>


              {/* STEP 09 */}

              <div className="evolution-step evolution-final">

                <span>
                  09
                </span>

                <div>

                  <h3>
                    Current Portfolio
                  </h3>

                  <p>
                    The current version combines multiple pages,
                    reusable React components, structured
                    navigation, interactive functionality,
                    responsive design, multimedia content,
                    and project documentation.
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
              evolution categories. These categories help
              explain why different changes were introduced
              during the development process.
            </p>


            <div className="taxonomy-grid">


              {/* CORRECTIVE */}

              <div className="taxonomy-item">

                <h3>
                  Corrective Evolution
                </h3>

                <p>
                  Corrective changes involve identifying and
                  fixing problems in the existing software.
                  During development, layout issues, navigation
                  problems, styling conflicts, and other
                  implementation errors were corrected to
                  improve the functionality of the portfolio.
                </p>

              </div>


              {/* ADAPTIVE */}

              <div className="taxonomy-item">

                <h3>
                  Adaptive Evolution
                </h3>

                <p>
                  Adaptive evolution involves modifying
                  software so that it can work with changing
                  requirements or environments. The portfolio
                  was adapted as new assignment requirements
                  were introduced, including additional pages,
                  React Router navigation, multimedia content,
                  and interactive functionality.
                </p>

              </div>


              {/* PERFECTIVE */}

              <div className="taxonomy-item">

                <h3>
                  Perfective Evolution
                </h3>

                <p>
                  Perfective evolution focuses on improving
                  existing software features and the user
                  experience. The portfolio was progressively
                  improved through better layouts, responsive
                  design, visual consistency, navigation
                  controls, image presentation, and interactive
                  elements.
                </p>

              </div>


              {/* PREVENTIVE */}

              <div className="taxonomy-item">

                <h3>
                  Preventive Evolution
                </h3>

                <p>
                  Preventive evolution involves making changes
                  that improve maintainability and reduce
                  potential future problems. Separating the
                  application into reusable React components
                  and individual pages makes the portfolio
                  easier to maintain and extend.
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
              individual portfolio sections are implemented
              as separate React pages.
            </p>

            <p>
              This structure makes the application easier to
              maintain and modify because changes to individual
              pages or reusable components can be made without
              unnecessarily affecting the rest of the
              application.
            </p>

            <p>
              Responsive design techniques were also used so
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
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Education.jsx
│   ├── ProfessionalKnowledge.jsx
│   ├── Gallery.jsx
│   ├── VideoGallery.jsx
│   ├── Blog.jsx
│   ├── Messaging.jsx
│   └── Readme.jsx
│
├── App.jsx
├── App.css
└── index.css

public/
│
├── images/
│
└── videos/
    └── crop-disease-demo.mp4`}
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
                Interactive image gallery
              </li>

              <li>
                Full-screen image viewing
              </li>

              <li>
                Crop Disease Detection project demonstration
              </li>

              <li>
                Blog section
              </li>

              <li>
                Interactive messaging interface
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
              New pages, components, visual improvements, and
              interactive features were introduced throughout
              the development process.
            </p>

            <p>
              The application structure was progressively
              improved to make the portfolio more organised,
              maintainable, reusable, and user-friendly.
              The current version represents the result of
              these successive changes and refinements.
            </p>

            <p>
              The evolution process also demonstrates how
              software can be continuously adapted after its
              initial implementation to address new
              requirements, improve existing functionality,
              correct problems, and support future extension.
            </p>

          </div>

        </section>


      </div>
      <PageNavigation previous="/messaging" previousLabel="Messaging" next="/contact" nextLabel="Contact" />
    </main>
  )
}

export default Readme