import React, { useState, Skeleton } from "react";
import './Post.css';
// Import feature components to the overall post
import Comment from "../Comments/Comment";
import Score from "../Score/Score";

const Post = (props) => {
    const {post, onToggleComments} = props;
    const { title, 
            score, 
            comments, 
            num_comments, 
            author,
            showingComments,
            loadingComments,
            errorComments } = post;
    let preview;

    if (post.preview !== undefined) {
        preview = post.preview.images[0].source.url;
        preview = preview.replace("&amp;s", "&s");
    }

    const onClick = (e) => {
        e.preventDefault();
        onToggleComments(post.permalink)
    }
    
    const displayComments = () => {
        if (errorComments) {
            return (
                <div>
                    <h3>Error loading comments</h3>
                </div>
            );
        }
    
        if (loadingComments) {
            return (
                <div>
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                </div>
            );
        }
    
        if (showingComments) {
            return (
                <div>
                    {comments.map((comment) => (
                        <Comment comment={comment} key={comment.id} />
                    ))}
                </div>
            );
        }
        return null;
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
                <p>Posted by: {author}</p>
                <button type="button"
                        className={`showing-comments ${post.showingComments}`}  
                        onClick={onClick} >
                    <i class="far fa-comment-alt"></i>
                    <p className="post-comments">{num_comments}</p>
                </button>
                {displayComments()}
            </div>
        </article>
    )
}

export default Post;
