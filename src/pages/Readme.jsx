
import PageNavigation from "../components/PageNavigation";

function Readme() {
  return (
    <main className="readme-page">

      {/* HEADER */}
      <div className="readme-header">
        <span className="readme-label">
          PROJECT DOCUMENTATION
        </span>

        <h1>
          Portfolio <span>Readme</span>
        </h1>

        <p className="readme-intro">
          An overview of the structure, technologies, features,
          development process, testing, and software evolution
          of my digital portfolio.
        </p>
      </div>

      <div className="readme-sections">

        {/* 01 - PORTFOLIO OVERVIEW */}
        <section className="readme-card">
          <span className="readme-number">01</span>

          <div>
            <h2>Portfolio Overview</h2>

            <p>
              This digital portfolio is a web application developed
              to present my academic background, professional
              knowledge, technical skills, software projects,
              learning experiences, and personal interests.
            </p>

            <p>
              The application follows a multi-page structure and
              provides consistent navigation, reusable React
              components, responsive layouts, interactive features,
              and multimedia content.
            </p>

            <p>
              The portfolio was developed incrementally. Its
              structure and functionality were improved throughout
              development by introducing new pages, integrating
              features, correcting issues, and improving the
              overall user experience.
            </p>
          </div>
        </section>

        {/* 02 - PORTFOLIO STRUCTURE */}
        <section className="readme-card">
          <span className="readme-number">02</span>

          <div>
            <h2>Portfolio Structure</h2>

            <ul className="readme-list">
              <li>
                <strong>Home:</strong> Introduces the portfolio
                and provides an overview of my background.
              </li>

              <li>
                <strong>About:</strong> Presents personal
                information, interests, goals, and background.
              </li>

              <li>
                <strong>Education:</strong> Describes my academic
                qualifications and educational journey.
              </li>

              <li>
                <strong>Professional Knowledge:</strong> Highlights
                my technical knowledge, programming skills,
                and understanding of software development.
              </li>

              <li>
                <strong>Gallery:</strong> Displays selected images
                related to my interests and experiences.
              </li>

              <li>
                <strong>Video Gallery:</strong> Presents video
                content as part of the multimedia section.
              </li>

              <li>
                <strong>Blog:</strong> Displays blog posts and
                learning-related content retrieved from the
                backend API.
              </li>

              <li>
                <strong>Messaging:</strong> Provides a contact
                form through which visitors can send messages.
              </li>

              <li>
                <strong>Readme:</strong> Documents the portfolio's
                structure, technologies, development approach,
                and evolution.
              </li>
            </ul>
          </div>
        </section>

        {/* 03 - TECHNOLOGIES USED */}
        <section className="readme-card">
          <span className="readme-number">03</span>

          <div>
            <h2>Technologies Used</h2>

            <div className="technology-tags">
              <span>React</span>
              <span>JavaScript</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>Vite</span>
              <span>React Router</span>
              <span>Python</span>
              <span>Django</span>
              <span>Django REST Framework</span>
              <span>Vitest</span>
            </div>

            <p>
              <strong>React:</strong> Used to develop the
              frontend through reusable components and
              individual page components.
            </p>

            <p>
              <strong>JavaScript:</strong> Used to implement
              application functionality, state management,
              and interactive behaviour.
            </p>

            <p>
              <strong>HTML and CSS:</strong> Used to structure
              the content and create the visual design,
              layouts, animations, and responsive interface.
            </p>

            <p>
              <strong>Vite:</strong> Used as the frontend
              development server and build tool.
            </p>

            <p>
              <strong>React Router:</strong> Used to manage
              navigation between the different portfolio pages.
            </p>

            <p>
              <strong>Django and Django REST Framework:</strong>
              Used to provide backend API functionality,
              including the service used to retrieve blog posts.
            </p>

            <p>
              <strong>Vitest and React Testing Library:</strong>
              Used to test React components and verify their
              expected behaviour.
            </p>
          </div>
        </section>

        {/* 04 - SOFTWARE EVOLUTION */}
        <section className="readme-card evolution-card">
          <span className="readme-number">04</span>

          <div>
            <h2>Software Evolution</h2>

            <p>
              The portfolio was developed through an incremental
              software evolution process. The application was
              progressively extended, reorganised, corrected,
              and improved as new requirements and ideas were
              introduced.
            </p>

            <p>
              The main development stages are outlined below.
            </p>

            <div className="evolution-timeline">

              <div className="evolution-step">
                <span>01</span>
                <div>
                  <h3>Initial Version</h3>
                  <p>
                    Established the initial project structure
                    and basic portfolio content.
                  </p>
                </div>
              </div>

              <div className="evolution-step">
                <span>02</span>
                <div>
                  <h3>Portfolio Pages</h3>
                  <p>
                    Developed individual pages to organise
                    academic, personal, and professional
                    information.
                  </p>
                </div>
              </div>

              <div className="evolution-step">
                <span>03</span>
                <div>
                  <h3>React Component Structure</h3>
                  <p>
                    Organised the application using React
                    components to improve code reuse,
                    readability, and maintainability.
                  </p>
                </div>
              </div>

              <div className="evolution-step">
                <span>04</span>
                <div>
                  <h3>Navigation Implementation</h3>
                  <p>
                    Introduced React Router and reusable
                    navigation components to support
                    movement between pages.
                  </p>
                </div>
              </div>

              <div className="evolution-step">
                <span>05</span>
                <div>
                  <h3>Interactive Features</h3>
                  <p>
                    Added interactive elements, including
                    navigation controls, blog functionality,
                    and the messaging form.
                  </p>
                </div>
              </div>

              <div className="evolution-step">
                <span>06</span>
                <div>
                  <h3>Backend Integration</h3>
                  <p>
                    Integrated the blog section with a Django
                    REST API to retrieve and display blog posts.
                  </p>
                </div>
              </div>

              <div className="evolution-step">
                <span>07</span>
                <div>
                  <h3>Visual and Responsive Improvements</h3>
                  <p>
                    Improved layouts, styling, navigation,
                    responsive behaviour, and consistency
                    across the application.
                  </p>
                </div>
              </div>

              <div className="evolution-step">
                <span>08</span>
                <div>
                  <h3>Testing and Refinement</h3>
                  <p>
                    Used component testing to identify issues
                    and improve the reliability of the
                    portfolio's features.
                  </p>
                </div>
              </div>

              <div className="evolution-step evolution-final">
                <span>09</span>
                <div>
                  <h3>Current Portfolio</h3>
                  <p>
                    Combined the portfolio pages, reusable
                    components, backend integration,
                    multimedia content, responsive styling,
                    and documentation into one application.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 05 - SOFTWARE EVOLUTION TAXONOMY */}
        <section className="readme-card">
          <span className="readme-number">05</span>

          <div>
            <h2>Software Evolution Taxonomy</h2>

            <p>
              The changes made during the development of the
              portfolio can be classified into four common
              categories of software evolution.
            </p>

            <div className="taxonomy-grid">

              <div className="taxonomy-item">
                <h3>Corrective Evolution</h3>
                <p>
                  Corrective evolution involves identifying
                  and fixing defects in existing software.
                  Development issues, styling problems,
                  navigation errors, and component issues
                  were addressed during implementation.
                </p>
              </div>

              <div className="taxonomy-item">
                <h3>Adaptive Evolution</h3>
                <p>
                  Adaptive evolution involves modifying
                  software to meet changing requirements.
                  New portfolio pages, multimedia features,
                  and backend API integration extended
                  the application's capabilities.
                </p>
              </div>

              <div className="taxonomy-item">
                <h3>Perfective Evolution</h3>
                <p>
                  Perfective evolution focuses on improving
                  existing functionality and user experience.
                  The portfolio was enhanced through improved
                  layouts, responsive styling, navigation,
                  and visual consistency.
                </p>
              </div>

              <div className="taxonomy-item">
                <h3>Preventive Evolution</h3>
                <p>
                  Preventive evolution aims to reduce future
                  maintenance problems. Reusable components,
                  separate page structures, and organised
                  code improve maintainability and make
                  future extensions easier.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* 06 - DEVELOPMENT APPROACH */}
        <section className="readme-card">
          <span className="readme-number">06</span>

          <div>
            <h2>Development Approach</h2>

            <p>
              The portfolio follows a component-based
              development approach. Each major section
              is implemented as a separate React page,
              while shared functionality is organised
              into reusable components.
            </p>

            <p>
              React Router provides navigation between
              the different pages. This separates page
              content from navigation logic and makes
              the application easier to maintain.
            </p>

            <p>
              The frontend communicates with the Django
              backend through a REST API for retrieving
              blog content. This demonstrates the
              integration of frontend and backend
              technologies in the application.
            </p>

            <p>
              Responsive CSS techniques are used to
              adapt the interface to different screen
              sizes, including desktop, tablet, and
              mobile devices.
            </p>
          </div>
        </section>

        {/* 07 - PROJECT STRUCTURE */}
        <section className="readme-card">
          <span className="readme-number">07</span>

          <div>
            <h2>Project Structure</h2>

            <p>
              The frontend is organised into separate
              folders for reusable components, individual
              pages, and application styling.
            </p>

            <pre className="project-structure">
{`src/
│
├── components/
│   ├── Card.jsx
│   ├── Navbar.jsx
│   └── PageNavigation.jsx
│
├── pages/
│   ├── About.jsx
│   ├── Blog.jsx
│   ├── Contact.jsx
│   ├── Education.jsx
│   ├── Home.jsx
│   ├── ProfessionalKnowledge.jsx
│   ├── Readme.jsx
│   ├── PictureGallery.jsx
│   ├── VideoGallery.jsx
│   └── NotFound.jsx
│
├── App.css
├── App.jsx
├── index.css
└── main.jsx

public/
│
├── images/
└── videos/

index.html
package.json
package-lock.json
vite.config.js`}
            </pre>

            <p>
              The backend is maintained separately and
              provides the API used by the frontend
              application.
            </p>
          </div>
        </section>

        {/* 08 - CURRENT FEATURES */}
        <section className="readme-card">
          <span className="readme-number">08</span>

          <div>
            <h2>Current Features</h2>

            <ul className="readme-list">
              <li>Multi-page React portfolio application</li>
              <li>React Router navigation</li>
              <li>Reusable React components</li>
              <li>Responsive layouts and custom CSS styling</li>
              <li>Academic and professional information</li>
              <li>Image gallery and video gallery</li>
              <li>Blog posts retrieved from a Django REST API</li>
              <li>Blog pagination</li>
              <li>Contact form functionality</li>
              <li>Loading and error handling in the blog section</li>
              <li>Component testing using Vitest and React Testing Library</li>
              <li>Project documentation</li>
            </ul>
          </div>
        </section>

        {/* 09 - TESTING */}
        <section className="readme-card">
          <span className="readme-number">09</span>

          <div>
            <h2>Testing</h2>

            <p>
              Testing was incorporated into the development
              process to verify the behaviour of individual
              React components and improve application
              reliability.
            </p>

            <p>
              Vitest was used as the testing framework,
              while React Testing Library was used to
              render components and check their behaviour
              from a user's perspective.
            </p>

            <p>
              Tests covered reusable components and
              application features, including navigation,
              blog content, and contact form interactions.
            </p>

            <p>
              Testing helped identify implementation issues
              and supported the refinement of the portfolio
              during development.
            </p>
          </div>
        </section>

        {/* 10 - EVOLUTION SUMMARY */}
        <section className="readme-card evolution-card">
          <span className="readme-number">10</span>

          <div>
            <h2>Evolution Summary</h2>

            <p>
              The development of this portfolio demonstrates
              how a software application can evolve through
              incremental improvements and extensions.
            </p>

            <p>
              The initial application was progressively
              enhanced with additional pages, reusable
              components, improved navigation, responsive
              design, multimedia content, backend integration,
              and component testing.
            </p>

            <p>
              These changes improved the organisation,
              functionality, maintainability, and usability
              of the portfolio. The project also provided
              practical experience in frontend development,
              backend integration, software testing, and
              software evolution.
            </p>
          </div>
        </section>

      </div>

      {/* PAGE NAVIGATION */}
      <PageNavigation
        previous="/blog"
        previousLabel="Blog"
        next="/"
        nextLabel="Home"
      />

    </main>
  );
}

export default Readme;
