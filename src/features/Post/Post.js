import React from "react";
import reddit from "../../api/reddit";
import './Post.css';

import Comments from "../Comments/Comments";

const Post = (props) => {
    const fetchedPosts = props.posts;
    const postKeys = Object.keys(fetchedPosts);
    const posts = [];



    const scoreClick = (e) => {
        e.preventDefault();

        
    }

    for (let i = 0; i < postKeys.length; i++) {
        let {title, selftext, score, url, user, num_comments, comments} = fetchedPosts[postKeys[i]];
        if (score > 999) {
            score = (score/1000).toFixed(1).concat("K");
        }
        posts.push (
            <div className="posts-container">
                <div className="score-container">
                    <button>
                        <i class="fas fa-arrow-circle-up score-up"></i>
                    </button>
                    <p className="score-text">{score}</p>
                    <button>
                        <i class="fas fa-arrow-circle-down score-down"></i>
                    </button>
                </div>
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