import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
function ArticlesLIst({ articles }) {
  return (
    <p className="page-body wrapper">
      {articles.map((articles, key) => (
        <Link key={key} to={`/articles/${articles.name}`}>
          <h2>{articles.title}</h2>
          <p>{articles.content.substring(1, 150)}...</p>
        </Link>
      ))}
    </p>
  );
}

export default ArticlesLIst;
