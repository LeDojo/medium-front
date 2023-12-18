import React, { useState, useEffect } from "react";
import axios from "axios";

function ArticleList() {
  const articles = [
    { id: 1, title: "truc", content: "bidule" },
    { id: 2, title: "truc", content: "bidule" },
    { id: 3, title: "truc", content: "bidule" },
    { id: 4, title: "truc", content: "bidule" },
    { id: 5, title: "truc", content: "bidule" },
  ];

  // useEffect(() => {
  //   axios
  //     .get("/api/articles")
  //     .then((response) => setArticles(response.data))
  //     .catch((error) => console.error("message error: ", error));
  // }, [setArticles]);

  // TODO: Need to fix useEffect by adding proxy and implement useContext.
  return (
    <div>
      <h2>Liste des articles</h2>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArticleList;
