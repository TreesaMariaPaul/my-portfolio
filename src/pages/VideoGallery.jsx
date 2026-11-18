
import PageNavigation from "../components/PageNavigation";

const videos = [
  {
    id: 1,
    title: "Introduction",
    description: "A short introduction about me and my portfolio.",
    source: "/videos/introduction.mp4",
  },
  {
    id: 2,
    title: "My Academic Journey",
    description: "A video about my academic experiences.",
    source: "/videos/academic-journey.mp4",
  },
  {
    id: 3,
    title: "Project Demonstration",
    description: "A demonstration of my software development work.",
    source: "/videos/project-demo.mp4",
  },
];

function VideoGallery() {
  return (
    <main className="video-gallery-page">
      <header className="gallery-header">
        <span className="gallery-label">WATCH AND EXPLORE</span>
        <h1>
          Video <span>Gallery</span>
        </h1>
        <p>
          Videos showcasing my experiences, learning activities, and projects.
        </p>
      </header>

      <section className="video-grid">
        {videos.map((video) => (
          <article className="video-card" key={video.id}>
            <video controls preload="metadata">
              <source src={video.source} type="video/mp4" />
              Your browser does not support video playback.
            </video>

            <div className="video-info">
              <h2>{video.title}</h2>
              <p>{video.description}</p>
            </div>
          </article>
        ))}
      </section>

      <PageNavigation
        previous="/picture-gallery"
        previousLabel="Picture Gallery"
        next="/contact"
        nextLabel="Contact"
      />
    </main>
  );
}

export default VideoGallery;
