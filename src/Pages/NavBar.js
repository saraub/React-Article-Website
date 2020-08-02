import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/aboutpage">About the website</Link>
        </li>

        <li>
          <Link to="/articleslistpage">Find Articles</Link>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
