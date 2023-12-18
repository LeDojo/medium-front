import React, { useState, useEffect } from "react";
import axios from "axios";

function ArticleList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("/api/articles")
      .then((response) => setArticles(response.data))
      .catch((error) => console.error("message error: ", error));
  }, [setArticles]);

  return (
    <div>
      <h2>Liste des articles</h2>
      <ul>
        {articles.map((article) => {
          <li key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.content}</p>
          </li>;
        })}
      </ul>
    </div>
  );
}

export default ArticleList;
