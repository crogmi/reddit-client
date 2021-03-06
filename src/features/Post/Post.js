import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Skeleton from "react-loading-skeleton";
import './Post.css';
// Import feature components to the overall post
import Comment from "../Comments/Comment";
import Score from "../Score/Score";
import { simplifyNum } from "../../util/SimplifyNumber/SimplifyNumber";

const Post = (props) => {
    const {post, onToggleComments} = props;
    const { title, 
            score, 
            num_comments, 
            author,
            permalink } = post;
    let preview;

    if (post.preview !== undefined) {
        preview = post.preview.images[0].source.url;
        preview = preview.replace("&amp;s", "&s");
    }
    
    const displayComments = () => {
        if (post.errorComments) {
            return (
                <div>
                    <h3>Error loading comments</h3>
                </div>
            );
        }
    
        if (post.loadingComments) {
            return (
                <div>
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                </div>
            );
        }
    
        if (post.showingComments) {
            return (
                <div>
                    {post.comments.map((comment) => (
                        <Comment comment={comment} key={comment.id} />
                    ))}
                </div>
            );
        }
        return null;
    }

    return (
        <article key={post.id}
                 className="post-container">
            <div className="score-container">
                <Score score={score} />
            </div>
            <div className="vertical-divider"></div>
            <div className="post-info">
                <h2 className="post-title">{title}</h2>
                <img src={preview} alt='' className="post-image" />
                <div className="post-footer">
                    <p className="post-author">Posted by: {author}</p>
                    <button type="button"
                            className={`icon-action-button ${post.showingComments && "showing-comments"} comments-button`}  
                            onClick={() => onToggleComments(permalink)} >
                        <i class="far fa-comment-alt comment-icon"></i>
                        <p className="post-comments">{simplifyNum(num_comments)}</p>
                    </button>
                </div>
                {displayComments()}
            </div>
        </article>
    )
}

export default Post;
