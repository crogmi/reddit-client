import React, { useState } from "react";
import reddit from "../../api/reddit";
import './Post.css';

// Import feature components to the overall post
import Comments from "../Comments/Comments";
import Score from "../Score/Score";

const Post = (props) => {
    const fetchedPosts = props.posts;
    const postKeys = Object.keys(fetchedPosts);
    const posts = [];

    for (let i = 0; i < postKeys.length; i++) {
        let {title, selftext, score, url, user, num_comments, comments} = fetchedPosts[postKeys[i]];

        if (score > 999) {
            score = (score/1000).toFixed(1).concat("K");
        }

        posts.push (
            <div className="posts-container">
                <Score score={score} />
                <div className="info-container"> 
                    <h1 className="post-title">{title}</h1>
                    <h2 className="post-text">{selftext}</h2>
                    <img className="post-image" src={url} alt='' />
                    <p className="post-user">Posted by {user}</p>
                </div>
                <Comments comments={comments}
                          num_comments={num_comments} />
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