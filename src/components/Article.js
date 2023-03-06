import React from "react";

function Article(props) {
    return (
    <div className="article__title">
        <h2>NVIDIA Accelerated AI on Azure</h2>
        <ArticleBody body={props.body} />
        <ArticleActions actions={props.actions} />
        <ArticleAutor author={props.author} />
    </div> 
    );
}

function ArticleBody(props) {
    return (
    <div className="article__box">
        <h2 className="article__subtitle">Article description:</h2>
        <p className="article__descr">NVIDIA on Azure is bringing AI, 
        networking, and high-performance computing to the enterprise.</p>
    </div> 
    );
}
  
function ArticleActions(props) {
    return (
    <div className="article__btns">
        <button className="article__btn">Read</button>
        <button className="article__btn">Mark as read</button>
        <button className="article__btn">Mark as unread</button>
    </div>
    );
}
  
function ArticleAutor(props) {
    return (
    <div className="article__autor">
        <p className="article__name">Autor: Mike</p>
        <p className="article__date">Published: 06.12.2022</p>
        <p className="article__theme">Theme: Video cards</p>
    </div> 
    );
}

export default Article;