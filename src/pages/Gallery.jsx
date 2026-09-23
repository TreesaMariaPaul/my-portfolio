import { useState } from "react"
import PageNavigation from "../components/PageNavigation"

function Gallery() {

  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <main className="gallery-page">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="gallery-header">

        <span className="gallery-label">
          PROJECTS & ACHIEVEMENTS
        </span>

        <h1>
          My <span>Gallery</span>
        </h1>

        <p className="gallery-intro">
          A collection of my projects, development work, and
          academic achievement throughout my journey in
          software development.
        </p>

      </div>


      {/* =====================================================
          GALLERY
      ===================================================== */}

      <div className="gallery-grid">


        {/* =================================================
            DIGITAL PORTFOLIO
        ================================================= */}

        <div className="gallery-item portfolio-gallery-item">

          <div className="gallery-image">

            <img
              src="/images/portfolio-project.png"
              alt="Digital portfolio development"
              onClick={() =>
                setSelectedImage("/images/portfolio-project.png")
              }
            />

          </div>

          <div className="gallery-content">

            <span className="gallery-category">
              PROJECT 01
            </span>

            <h2>
              Digital Portfolio Development
            </h2>

            <p>
              This digital portfolio is a React-based web
              application developed to present my academic
              background, professional knowledge, projects,
              learning experiences, and journey in software
              engineering.
            </p>

            <p>
              The portfolio has been developed using a
              component-based approach, with individual React
              components and pages used to organise the
              application. React Router was implemented to
              provide navigation between the different sections
              of the portfolio.
            </p>

            <p>
              The project has evolved through different stages
              of development. Reusable components, page
              navigation, responsive layouts, interactive
              features, and consistent visual styling were
              progressively introduced as the portfolio
              developed.
            </p>

            <p>
              Developing this portfolio has allowed me to apply
              software engineering concepts in a practical
              project while improving my understanding of React,
              web development, component-based design, and
              software evolution.
            </p>

          </div>

        </div>


        {/* =================================================
            CROP DISEASE PROJECT
        ================================================= */}

        <div className="gallery-item">

          <div className="gallery-image-group">

            <div className="gallery-image">

              <img
                src="/images/project_development.png"
                alt="Crop Disease Detection project interface"
                onClick={() =>
                  setSelectedImage("/images/project_development.png")
                }
              />

            </div>


            <div className="gallery-image">

              <img
                src="/images/db-crop.png"
                alt="Crop Disease Detection database"
                onClick={() =>
                  setSelectedImage("/images/db-crop.png")
                }
              />

            </div>

          </div>


          <div className="gallery-content">

            <span className="gallery-category">
              PROJECT 02
            </span>

            <h2>
              Crop Disease Detection
            </h2>

            <p>
              This project focuses on developing a software
              solution related to crop disease detection. The
              project interface demonstrates the user-facing
              side of the application, while the second image
              shows the database component used during
              development.
            </p>

            <p>
              The project provided practical experience in
              application development, database management,
              and connecting different parts of a software
              system to create a functional application.
            </p>

          </div>

        </div>


        {/* =================================================
            ECO RECYCLE PROJECT
        ================================================= */}

        <div className="gallery-item">

          <div className="gallery-image-group">

            <div className="gallery-image">

              <img
                src="/images/eco_recycle-project.png"
                alt="Eco Recycle project interface"
                onClick={() =>
                  setSelectedImage("/images/eco_recycle-project.png")
                }
              />

            </div>


            <div className="gallery-image">

              <img
                src="/images/xampp-eco.png"
                alt="Eco Recycle database"
                onClick={() =>
                  setSelectedImage("/images/xampp-eco.png")
                }
              />

            </div>

          </div>


          <div className="gallery-content">

            <span className="gallery-category">
              PROJECT 03
            </span>

            <h2>
              Eco Recycle
            </h2>

            <p>
              Eco Recycle is a web-based project developed to
              explore recycling and environmentally responsible
              practices through a digital platform.
            </p>

            <p>
              The first image shows the project interface,
              while the second image demonstrates the database
              environment used during development. The project
              provided practical experience in web development,
              database integration, and developing a functional
              software application.
            </p>

          </div>

        </div>


        {/* =================================================
            BCA CERTIFICATE
        ================================================= */}

        <div className="gallery-item">

          <div className="gallery-image">

            <img
              src="/images/degree-certificate.jpg"
              alt="BCA graduation certificate"
              onClick={() =>
                setSelectedImage("/images/degree-certificate.jpg")
              }
            />

          </div>


          <div className="gallery-content">

            <span className="gallery-category">
              ACADEMIC ACHIEVEMENT
            </span>

            <h2>
              BCA Graduation Certificate
            </h2>

            <p>
              My Bachelor of Computer Applications graduation
              certificate, representing the successful
              completion of my undergraduate studies.
            </p>

            <p>
              My BCA studies provided a foundation in
              programming, software development, databases,
              web technologies, and computer applications,
              which I continue to develop through my
              postgraduate studies in Software Engineering.
            </p>

          </div>

        </div>


      </div>


      {/* =====================================================
          FULL SCREEN IMAGE MODAL
      ===================================================== */}

      {selectedImage && (

        <div
          className="image-modal"
          onClick={() => setSelectedImage(null)}
        >

          <button
            className="image-modal-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image"
          >
            ×
          </button>


          <img
            src={selectedImage}
            alt="Full screen gallery image"
            onClick={(e) => e.stopPropagation()}
          />

        </div>

      )}


      {/* =====================================================
          PAGE NAVIGATION
      ===================================================== */}

      <PageNavigation
        previous="/professional-knowledge"
        previousLabel="Professional Knowledge"
        next="/videos"
        nextLabel="Video Gallery"
      />

    </main>
  )
}

export default Gallery