import React, { useState } from "react";
import "./Comments.css";

const Comments = (props) => {

    const comments = props.comments;
    const num_comments = props.num_comments;
    const commentsList = [];
    let displayedComments;
    
    const [hideComments, setHideComments] = useState(true);

    const onClick = (e) => {
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
            <button onClick={onClick}>
                <i class="far fa-comment-alt"></i>
                <p className="post-comments">{num_comments}</p>
            </button>
            {displayedComments}
        </div>
    )
}

export default Comments;