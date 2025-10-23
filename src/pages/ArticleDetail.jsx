import React from 'react';
import { Link, useSearchParams, Navigate } from 'react-router-dom';
import { articlesDatabase } from '../data.js';
import InsightCard from '../components/InsightCard.jsx';

function ArticleDetail() {
  const [searchParams] = useSearchParams();
  const articleId = searchParams.get('id');

  const baseUrl = import.meta.env.BASE_URL;

  const moreArticles = articlesDatabase.filter(a => 
    [4, 5, 6].includes(a.id) && a.id != articleId 
  );

  const article = articlesDatabase.find(a => a.id == articleId);

  if (!article) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <header
        className="article-hero"
        style={{ backgroundImage: `url(${baseUrl}${article.image})` }}
      >
        <nav className="navbar pt-4">
          <div className="container-fluid px-5">
            <Link className="navbar-brand logo" to="/">Wireread</Link>
            <a href="#" className="btn btn-light btn-nav rounded-pill">Contact Us</a>
          </div>
        </nav>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center article-header-content">
              <h1 className="display-4 fw-bold">{article.title}</h1>
              <div className="author-info-article mt-4">
                <img src={`${baseUrl}${article.authorIcon}`} alt="Author Icon" className="author-icon" />
                <div className="mt-2">
                  <div className="author-name fw-bold author-namee">{article.author}</div>
                  <div className="author-role text-muted small author-rolee">{article.authorRole}</div>
                </div>
              </div>
              <div className="social-links mt-4">
                <a href="#" className="social-link"><i className="bi bi-facebook"></i></a>
                <a href="#" className="social-link"><i className="bi bi-twitter-x"></i></a>
                <a href="#" className="social-link"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="article-body-wrapper py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div
                id="article-content-body"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </div>
          </div>
        </div>
      </main>

      <section className="more-articles-section py-5">
        <div className="container">
          <div className="row justify-content-between align-items-center mb-4">
            <div className="col-auto">
              <h2 className="fw-bold section-title-underline">More Articles</h2>
            </div>
            <div className="col-auto">
              <Link to="/articles" className="view-all-link">View all</Link>
            </div>
          </div>
          <div className="row">
            {moreArticles.map(article => (
               <InsightCard
                key={article.id}
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

export default ArticleDetail;