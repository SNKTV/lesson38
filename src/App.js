import React from "react";
import Article from "./components/Article";
// import ArticleBody from "./components/ArticleBody";
// import ArticleActions from "./components/ArticleActions";
// import ArticleAuthor from "./components/ArticleAuthor";

function App() {
  return (
    <div className="wrapper">
      <h1 className="title">NVIDIA news</h1>
      <div className="article">
      <Article />
      {/* <ArticleBody />
      <ArticleActions />
      <ArticleAuthor /> */}
      </div>
    </div> 
    );
  }
export default App;