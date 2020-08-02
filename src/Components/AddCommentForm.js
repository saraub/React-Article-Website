import React, { useState } from "react";
import "../App.css";

function Addcomment({ articleName, setarticleinfo }) {
  const [username, setusername] = useState("");
  const [comment, setcomment] = useState("");
  const addcomment = async () => {
    const result = await fetch(`/api/articles/${articleName}/addcomment`, {
      method: "post",
      body: JSON.stringify({ Username: username, Text: comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const body = await result.json();
    -setarticleinfo(body);

    setusername("");
    setcomment("");
  };
  return (
    <div id="add-comment-form">
      <label>Username: </label>
      <input
        type="text"
        value={username}
        onChange={(event) => setusername(event.target.value)}
      />
      <label>Comment: </label>
      <textarea
        rows="4"
        value={comment}
        onChange={(event) => setcomment(event.target.value)}
        cols="50"
      />
      <button onClick={() => addcomment()}>Add Comment</button>
    </div>
  );
}
export default Addcomment;
