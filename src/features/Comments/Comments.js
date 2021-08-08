import React, { useState } from "react";
import "./Comments.css";

const Comments = (props) => {

    const comments = props.comments;
    let num_comments = props.num_comments;
    const commentsList = [];
    let displayedComments;

    if (num_comments > 999) {
        num_comments = (num_comments/1000).toFixed(1).concat("K");
    } 
    
    const [hideComments, setHideComments] = useState(true);

    const commentClick = (e) => {
        e.preventDefault();
        setHideComments(!hideComments);
    }

    for (let i = 0; i < comments.length; i++) {
        let user = comments[i].user;
        let text = comments[i].text;
        commentsList.push(
            <div className="comment-container">
                <p className="comment-user">Posted by: {user}</p>
                <p className="comment-text">{text}</p>
            </div>
        );
    };

    if (hideComments) {
        displayedComments = [];
    } else {
        displayedComments = commentsList;
    }

    return (
        <div className="comments-container">
            <button onClick={commentClick}>
                <i class="far fa-comment-alt"></i>
                <p className="post-comments">{num_comments}</p>
            </button>
            {displayedComments}
        </div>
    )
}

export default Comments;