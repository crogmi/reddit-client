import React from "react";
import "./Comments.css";

const Comments = (props) => {

    const hideComments = props.hideComments;
    const comments = props.comments;
    const commentsList = [];
    let displayedComments;

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
        displayedComments = commentsList;
    } else {
        displayedComments = [];
    }

    return (
        <div className="comments-container">
            {displayedComments}
        </div>
    )
}

export default Comments;