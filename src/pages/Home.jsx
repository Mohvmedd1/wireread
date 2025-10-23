import React from 'react';
import { Link } from 'react-router-dom';
import { articlesDatabase } from '../data.js';
import ArticleCard from '../components/ArticleCard.jsx';
import InsightCard from '../components/InsightCard.jsx';

const newArticles = articlesDatabase.filter(a => [8, 9, 10, 11].includes(a.id));
const insightArticles = articlesDatabase.filter(a => [1, 2, 3, 4, 5, 6].includes(a.id));

function Home() {
  return (
    <>
      <header className="hero-section d-flex flex-column">
        <div className="container-fluid px-5">
          <nav className="navbar navbar-dark pt-4">
            <Link className="navbar-brand logo" to="/">Wireread</Link>
            <a href="#" className="btn btn-light btn-nav rounded-pill">Contact Us</a>
          </nav>
          <main className="hero-content d-flex flex-column justify-content-center">
            <div className="col-lg-7 col-md-10">
              <h1 className="display-2 fw-bold"> Discover Insightful<br />Reads </h1>
              <p className="lead my-4">
                Explore a collection of expertly curated articles offering deep insights,
                practical knowledge, and forward-thinking ideas to inspire innovation
                and continuous learning.
              </p>
              <a href="#" className="btn btn-light btn-main rounded-pill">Get Started</a>
            </div>
          </main>
        </div>
      </header>

      <section className="articles-section py-5">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-7 text-center">
              <h2 className="fw-bold">New articles</h2>
              <p className="lead text-muted">
                Explore a collection of expertly curated articles offering deep insights, practical knowledge
              </p>
            </div>
          </div>
          <div className="row">
            {newArticles.map(article => (
              <ArticleCard
                key={article.id}
                id={article.id}
                imageUrl={article.image}
                title={article.title}
                description={article.content.substring(0, 100).replace('<p class="lead">', '') + '...'}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="insights-section py-5">
        <div className="container">
          <div className="row justify-content-between align-items-center mb-4">
            <div className="col-auto">
              <h2 className="fw-bold">Insight and announcement</h2>
            </div>
            <div className="col-auto">
              <Link to="/articles" className="view-all-link">View all</Link>
            </div>
          </div>
          <div className="row">
            {insightArticles.map(article => (
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

export default Home;