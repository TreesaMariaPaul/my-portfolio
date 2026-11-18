
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="not-found-page">
      <span className="not-found-code">404</span>

      <h1>
        Page <span>Not Found</span>
      </h1>

      <p>
        Sorry, the page you are looking for does not exist or may have been
        moved.
      </p>

      <Link to="/" className="btn">
        Return to Home
      </Link>
    </main>
  );
}

export default NotFound;
