// Need to incorporate the fetch to get posts from the actual reddit API

import React, { useState } from "react";
import reddit from "../../api/fakeReddit";
import './Post.css';
// Import feature components to the overall post
import Comments from "../Comments/Comments";
import Score from "../Score/Score";

const Post = (props) => {
    const post = props.post;
    const onToggleComments = props.onToggleComments;
    const {title, score, comments, num_comments, author} = post;
    let preview;

    if (post.preview !== undefined) {
        preview = post.preview.images[0].source.url;
        preview = preview.replace("&amp;s", "&s");
    }


    return (
        <article key={post.id}>
            <div className="score-container">
                <Score score={score} />
            </div>
            <div className="post-info">
                <h2 className="post-title">{title}</h2>
                <img src={preview} alt='' className="post-image" />
            </div>
            <div className="post-footer">
                {/* Need to reconfigure the comments portion */}
                <p>Posted by: {author}</p>
                <Comments num_comments={num_comments}
                          comments={comments} />
            </div>
        </article>
    )
}

export default Post;


// const posts = [];

// for (let i = 0; i < postKeys.length; i++) {
//     let {title, selftext, score, url, user, num_comments, comments} = fetchedPosts[postKeys[i]];

//     if (score > 999) {
//         score = (score/1000).toFixed(1).concat("K");
//     }

//     posts.push (
//         <div className="posts-container" key={i+1}>
//             <Score score={score} />
//             <div className="info-container"> 
//                 <h1 className="post-title">{title}</h1>
//                 <h2 className="post-text">{selftext}</h2>
//                 <img className="post-image" src={url} alt='' />
//                 <p className="post-user">Posted by {user}</p>
//             </div>
//             <Comments comments={comments}
//                       num_comments={num_comments} />
//         </div>
//     )
// }