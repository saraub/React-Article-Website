import React, { useState, useEffect } from "react";
import "../App.css";

function Commentlist({ commentslist }) {
  if (commentslist) {
    return (
      <div>
        {commentslist.map((comments, key) => (
          <div className="comment" key={key}>
            <h4>{comments.Username}</h4>
            <p>{comments.Text}</p>
          </div>
        ))}
      </div>
    );
  } else {
    return <div></div>;
  }
}
export default Commentlist;
