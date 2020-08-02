import React from "react";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ArticlesListPage from "./Pages/ArticlesListPage";
import NavBar from "./Pages/NavBar";

import ArticlePage from "./Pages/ArticlePage";
import NotfoundPage from "./Pages/NotFfoundPage";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <NavBar></NavBar>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/aboutpage" component={AboutPage} />
          <Route path="/articleslistpage" component={ArticlesListPage} />
          <Route path="/articles/:name" component={ArticlePage} />
          <Route component={NotfoundPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
