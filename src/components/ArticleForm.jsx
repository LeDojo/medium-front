import React, { useState } from "react";
import axios from "axios";

function ArticleForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/articles", { title, content }).then((response) => {
      setArticles((prevArticles) => [...prevArticles, response.data]).catch(
        (error) => console.error("Error creating article: ", error)
      );
      setTitle("");
      setContent("");
    });
  };

  return (
    <div>
      <h2>Creer un nouvel article</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Titre:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Contenu:
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </label>
        <button type="submit">Créer l'article</button>
      </form>
    </div>
  );
}

export default ArticleForm;
