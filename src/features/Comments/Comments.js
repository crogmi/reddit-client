import React from "react";

const Comments = (props) => {
    const {comments, num_comments, hideComments} = props;
    
    return (
        <div className="comments-container">
            <i class="far fa-comment-alt"></i>
            <p className="post-comments">{num_comments}</p>
        </div>
    )
}

export default Comments;