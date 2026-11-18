
import { useEffect, useState } from "react";
import PageNavigation from "../components/PageNavigation";
import Card from "../components/Card";

function Blog() {
  const postsPerPage = 2;

  const [blogPosts, setBlogPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchBlogPosts() {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/blog/"
        );

        if (!response.ok) {
          throw new Error("Failed to load blog posts.");
        }

        const data = await response.json();
        setBlogPosts(data);
      } catch (error) {
        console.error("Blog API error:", error);
        setError("Unable to load blog posts. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    fetchBlogPosts();
  }, []);

  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const startIndex = (currentPage - 1) * postsPerPage;

  const currentPosts = blogPosts.slice(
    startIndex,
    startIndex + postsPerPage
  );

  function changePage(page) {
    setCurrentPage(page);
  }

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

      {loading && (
        <p className="blog-loading">Loading blog posts...</p>
      )}

      {error && (
        <p className="blog-error" role="alert">
          {error}
        </p>
      )}

      {!loading && !error && blogPosts.length === 0 && (
        <p className="blog-empty">
          No blog posts are available at the moment.
        </p>
      )}

      {!loading && !error && blogPosts.length > 0 && (
        <>
          <div className="blog-grid">
            {currentPosts.map((post) => (
              <Card className="blog-card" key={post.id}>
                <div className="blog-number">
                  {String(post.id).padStart(2, "0")}
                </div>

                <div className="blog-content">
                  <span className="blog-category">
                    BLOG POST
                  </span>

                  <h2>{post.title}</h2>

                  <p>{post.excerpt}</p>

                  <p>{post.content}</p>
                </div>
              </Card>
            ))}
          </div>

          {totalPages > 1 && (
            <nav
              className="blog-pagination"
              aria-label="Blog pages"
            >
              <button
                type="button"
                onClick={() => changePage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>

              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  type="button"
                  key={index + 1}
                  className={
                    currentPage === index + 1 ? "active" : ""
                  }
                  aria-current={
                    currentPage === index + 1 ? "page" : undefined
                  }
                  onClick={() => changePage(index + 1)}
                >
                  {index + 1}
                </button>
              ))}

              <button
                type="button"
                onClick={() => changePage(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </nav>
          )}
        </>
      )}

      <PageNavigation
        previous="/professional-knowledge"
        previousLabel="Professional Knowledge"
        next="/readme"
        nextLabel="Readme"
      />
    </main>
  );
}

export default Blog;
