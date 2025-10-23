import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom' 

import './style.css'

import Home from './pages/Home.jsx'
import ArticleList from './pages/ArticleList.jsx'
import ArticleDetail from './pages/ArticleDetail.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/detailedArticle" element={<ArticleDetail />} />
      </Routes>
    </HashRouter> 
  </React.StrictMode>,
)