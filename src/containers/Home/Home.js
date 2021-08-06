import React from "react";
import { useDispatch, useSelector } from "react-redux";
import reddit from "../../api/reddit";
import Post from "../../features/Post/Post";
import Comments from "../../features/Comments/Comments";
import "./Home.css";

const Home = () => {
    
    const { isLoading, error, searchTerm, selectedSubreddit } = reddit;
    const posts = reddit.fetchPosts;
    
    // Need to restructure this as there is an ID key before the .comments and .num_comments
    const comments = posts.comments;
    const num_comments = posts.num_comments;
    const hideComments = true;

    return (
        <div className="home">
            <Post isLoading={isLoading} 
                  error={error}
                  searchTerm={searchTerm}
                  selectedSubreddit={selectedSubreddit}
                  posts={posts} />
            <Comments hideComments={hideComments}
                      comments={comments}
                      num_comments={num_comments} />
        </div>
    )
}

export default Home;