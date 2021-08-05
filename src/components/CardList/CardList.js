import React from "react";
import { Link } from "react-router-dom";
import { fetchPosts } from "../../api/reddit";
import './CardList.css';

const CardList = () => {

    const postKeys = Object.keys(fetchPosts);
    const posts = [];

    for (let i = 0; i < postKeys.length; i++) {
        let {title, num_comments, score, url} = fetchPosts[postKeys[i]];
        posts.push (
            <div className="posts-container">
                <div className="score-container">
                    <i class="fas fa-arrow-circle-up score-up"></i>
                    <p className="score-text">{score}</p>
                    <i class="fas fa-arrow-circle-down score-down"></i>
                </div>
                <div className="info-container">
                    <h1 className="post-title">{title}</h1>
                    <img className="post-image" src={url} alt='' />
                    <div className="comment-container">
                        <i class="far fa-comment-alt"></i>
                        <p className="post-comments">{num_comments}</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="card-list">
            {posts}
        </div>
    )
}

export default CardList;