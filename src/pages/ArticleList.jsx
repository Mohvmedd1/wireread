import React from 'react';
import { Link } from 'react-router-dom';
import { articlesDatabase } from '../data.js';
import InsightCard from '../components/InsightCard.jsx';

const allInsightArticles = articlesDatabase.filter(a => [1, 2, 3, 4, 5, 6, 1, 2, 3].includes(a.id));

function ArticleList() {
  return (
    <>
      <nav className="navbar navbar-light bg-white py-3 sticky-top main-navbar">
        <div className="container-fluid px-5">
          <Link className="navbar-brand logo" to="/">Wireread</Link>
          <a href="#" className="btn btn-dark btn-nav rounded-pill">Contact Us</a>
        </div>
      </nav>

      <section className="insights-section py-5">
        <div className="container">
          <div className="row mb-4">
            <div className="col">
              <h2 className="fw-bold display-5">Insight and announcement</h2>
            </div>
          </div>
          <div className="row">
            {allInsightArticles.map((article, index) => (
              <InsightCard
                key={`${article.id}-${index}`}
                id={article.id}
                imageUrl={article.image}
                title={article.title}
                description={article.content.substring(0, 100).replace('<p class="lead">', '') + '...'}
                authorName={article.author}
                authorRole={article.authorRole}
                authorIcon={article.authorIcon}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ArticleList;