import React from 'react';
import { Link } from 'react-router-dom';

function ArticleCard({ id, imageUrl, title, description }) {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="article-card">
        <Link to={`/detailedArticle?id=${id}`}>
          <img src={`${baseUrl}${imageUrl}`} alt={title} className="img-fluid mb-3" />
        </Link>
        <Link to={`/detailedArticle?id=${id}`} className="text-decoration-none">
          <h3 className="h5 fw-bold">{title}</h3>
        </Link>
        <p className="text-muted small">
          {description}
        </p>
      </div>
    </div>
  );
}

export default ArticleCard;