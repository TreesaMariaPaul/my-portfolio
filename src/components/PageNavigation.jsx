import { Link } from "react-router-dom"

function PageNavigation({ previous, previousLabel, next, nextLabel }) {
  return (
    <div className="page-navigation">

      {previous && (
        <Link to={previous} className="page-nav-button previous">
          <span className="page-nav-arrow">←</span>

          <span>
            <small>Previous</small>
            {previousLabel}
          </span>
        </Link>
      )}

      {next && (
        <Link to={next} className="page-nav-button next">
          <span>
            <small>Next</small>
            {nextLabel}
          </span>

          <span className="page-nav-arrow">→</span>
        </Link>
      )}

    </div>
  )
}

export default PageNavigation