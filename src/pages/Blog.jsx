import PageNavigation from "../components/PageNavigation"

function Blog() {
  return (
    <main className="blog-page">

      <div className="blog-header">

        <span className="blog-label">
          MY LEARNING JOURNEY
        </span>

        <h1>
          My <span>Blog</span>
        </h1>

        <p className="blog-intro">
          A collection of posts about my experiences, learning journey,
          software development, and technology.
        </p>

      </div>

      <div className="blog-grid">

        <article className="blog-card">

          <div className="blog-number">
            01
          </div>

          <div className="blog-content">

            <span className="blog-category">
              SOFTWARE DEVELOPMENT
            </span>

            <h2>
              My Journey into Software Development
            </h2>

            <p>
              My interest in software development began during my
              studies in computer applications. Through academic
              projects and practical learning, I developed an interest
              in creating software solutions and exploring new
              technologies.
            </p>

            <p>
              I am continuing to develop my knowledge of programming,
              web development, software engineering, and modern
              technologies as I progress through my studies.
            </p>

          </div>

        </article>


        <article className="blog-card">

          <div className="blog-number">
            02
          </div>

          <div className="blog-content">

            <span className="blog-category">
              REACT
            </span>

            <h2>
              Learning React
            </h2>

            <p>
              Learning React has introduced me to component-based
              development and a different way of building web
              applications.
            </p>

            <p>
              While developing this portfolio, I have learned about
              React components, routing, state management, and
              organising a project into reusable sections.
            </p>

          </div>

        </article>


        <article className="blog-card">

          <div className="blog-number">
            03
          </div>

          <div className="blog-content">

            <span className="blog-category">
              SOFTWARE ENGINEERING
            </span>

            <h2>
              Building My Portfolio
            </h2>

            <p>
              Developing this portfolio has given me an opportunity
              to apply software engineering concepts in a practical
              project.
            </p>

            <p>
              The portfolio has evolved through different stages,
              including creating individual pages, introducing
              reusable components, adding navigation, and developing
              interactive features.
            </p>

          </div>

        </article>

      </div>
          <PageNavigation previous="/professional-knowledge" previousLabel="Professional Knowledge" next="/readme" nextLabel="Readme" />

    </main>
  )
}

export default Blog