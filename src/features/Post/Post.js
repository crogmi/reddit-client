import React from "react";
import reddit from "../../api/reddit";
import './Post.css';

const Post = () => {
    const fetchedPosts = reddit.fetchPosts;
    const postKeys = Object.keys(fetchedPosts);
    const posts = [];

    for (let i = 0; i < postKeys.length; i++) {
        let {title, score, url, user} = fetchedPosts[postKeys[i]];
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
                    <p className="post-user">Posted by {user}</p>
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

export default Post;