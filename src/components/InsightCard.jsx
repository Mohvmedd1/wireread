import React from 'react';
import { Link } from 'react-router-dom';

function InsightCard({ id, imageUrl, title, description, authorName, authorRole, authorIcon }) {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="insight-card">
        <Link to={`/detailedArticle?id=${id}`}>
          <img src={`${baseUrl}${imageUrl}`} alt={title} className="insight-image" />
        </Link>
        <Link to={`/detailedArticle?id=${id}`} className="text-decoration-none">
          <h3 className="h5 fw-bold mt-3">{title}</h3>
        </Link>
        <p className="text-muted small">{description}</p>
        <div className="author-info">
          <img src={`${baseUrl}${authorIcon}`} alt="Author Icon" className="author-icon" />
          <div>
            <div className="author-name fw-bold">{authorName}</div>
            <div className="author-role text-muted small">{authorRole}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InsightCard;