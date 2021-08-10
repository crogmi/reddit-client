import React, { useState, Skeleton } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Comment.css";

const Comment = (props) => {
    const comment = props.comment;
    const { author, body } = comment;

    return (
        <div className="comment-container">
            <h3 className="comment-author">{author}</h3>
            <p className="comment-text">{body}</p>
        </div>
    )
}

export default Comment;