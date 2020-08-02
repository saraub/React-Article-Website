import React from "react";
import "../App.css";

import Articleslist from "../Components/ArticlesList";
import articles from "./article-content";

function ArticlesListPage() {
  return (
    <div className="wrapper">
      <h2>Articlelist</h2>
      <Articleslist articles={articles} />
    </div>
  );
}

export default ArticlesListPage;
