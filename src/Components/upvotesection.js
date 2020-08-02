import React from "react";
import "../App.css";

function Upvote({ articleName, upvotes, setArticleinfo }) {
  const upvotearticle = async () => {
    const result = await fetch(`/api/articles/${articleName}/upvote`, {
      method: "post",
    });
    const body = await result.json();
    setArticleinfo(body);
  };
  return (
    <div>
      <button id="upvotes-section button" onClick={() => upvotearticle()}>
        Add Like
      </button>

      <p className="like"> this article has been liked {upvotes} times!</p>
    </div>
  );
}

export default Upvote;
