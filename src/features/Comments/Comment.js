import React, { useState, Skeleton } from "react";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "../Avatar/Avatar";
import "./Comment.css";

const Comment = (props) => {
    const comment = props.comment;
    const { author, body } = comment;

    return (
        <div className="comment-container">
            <Avatar className="user-avatar"
                    author={author} />
            <p>{author}</p>
            <p>{body}</p>
        </div>
    )
}

export default Comment;