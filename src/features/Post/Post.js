import React from "react";
import reddit from "../../api/reddit";
import './Post.css';

import Comments from "../Comments/Comments";

const Post = (props) => {
    const fetchedPosts = props.posts;
    const hideComments = props.hideComments;
    const onClick = props.onClick;

    const postKeys = Object.keys(fetchedPosts);
    const posts = [];

    for (let i = 0; i < postKeys.length; i++) {
        let {title, score, url, user, num_comments, comments} = fetchedPosts[postKeys[i]];
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
                </div>
                <div className="post-footer">
                    <p className="post-user">Posted by {user}</p>
                    <div className="comments-container">
                        <button onClick={onClick}>
                            <i class="far fa-comment-alt"></i>
                        </button>
                        <p className="post-comments">{num_comments}</p>
                    </div>
                </div>
                <Comments hideComments={hideComments}
                          comments={comments} />
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