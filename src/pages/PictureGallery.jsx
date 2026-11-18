
import PageNavigation from "../components/PageNavigation";

const pictures = [
  {
    id: 1,
    title: "Academic Journey",
    image: "/images/gallery-1.jpg",
    description: "Moments from my educational journey.",
  },
  {
    id: 2,
    title: "University Life",
    image: "/images/gallery-2.jpg",
    description: "Experiences and memories from university.",
  },
  {
    id: 3,
    title: "Technology",
    image: "/images/gallery-3.jpg",
    description: "My interest in technology and development.",
  },
  {
    id: 4,
    title: "Projects",
    image: "/images/gallery-4.jpg",
    description: "Highlights from my project work.",
  },
];

function PictureGallery() {
  return (
    <main className="gallery-page">
      <header className="gallery-header">
        <span className="gallery-label">MY MEMORIES</span>
        <h1>
          Picture <span>Gallery</span>
        </h1>
        <p>
          A collection of photographs representing my academic journey,
          experiences, interests, and projects.
        </p>
      </header>

      <section className="picture-grid">
        {pictures.map((picture) => (
          <article className="picture-card" key={picture.id}>
            <img
              src={picture.image}
              alt={picture.title}
              loading="lazy"
            />
            <div className="picture-info">
              <h2>{picture.title}</h2>
              <p>{picture.description}</p>
            </div>
          </article>
        ))}
      </section>

      <PageNavigation
        previous="/professional-knowledge"
        previousLabel="Professional Knowledge"
        next="/video-gallery"
        nextLabel="Video Gallery"
      />
    </main>
  );
}

export default PictureGallery;
