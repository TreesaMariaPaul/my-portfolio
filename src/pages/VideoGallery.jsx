import PageNavigation from "../components/PageNavigation"

function VideoGallery() {
  return (
    <main className="video-gallery-page">

      <div className="video-gallery-header">

        <span className="video-gallery-label">
          PROJECT DEMONSTRATION
        </span>

        <h1>
          Video <span>Gallery</span>
        </h1>

        <p className="video-gallery-intro">
          A collection of software project demonstrations
          showcasing my development work, features, and
          functionality.
        </p>

      </div>


      <div className="video-grid">

        {/* PROJECT 01 - DIGITAL PORTFOLIO */}

        <div className="video-card">

          <div className="video-container">

            <video controls>
              <source
                src="/videos/portfolio.mp4"
                type="video/mp4"
              />

              Your browser does not support the video tag.

            </video>

          </div>

          <div className="video-content">

            <span className="video-category">
              PROJECT 01
            </span>

            <h2>
              Digital Portfolio
            </h2>

            <p>
              A demonstration of my React-based digital
              portfolio, showcasing its multi-page structure,
              navigation, responsive design, project gallery,
              video gallery, blog, messaging facility, and
              other interactive features.
            </p>

          </div>

        </div>


        {/* PROJECT 02 - CROP DISEASE DETECTION */}

        <div className="video-card">

          <div className="video-container">

            <video controls>
              <source
                src="/videos/crop.mp4"
                type="video/mp4"
              />

              Your browser does not support the video tag.

            </video>

          </div>

          <div className="video-content">

            <span className="video-category">
              PROJECT 02
            </span>

            <h2>
              Crop Disease Detection
            </h2>

            <p>
              A demonstration of my Crop Disease Detection
              project, showcasing the main features and
              functionality of the application.
            </p>

          </div>

        </div>

      </div>


      <PageNavigation
        previous="/gallery"
        previousLabel="Gallery"
        next="/blog"
        nextLabel="Blog"
      />

    </main>
  )
}

export default VideoGallery