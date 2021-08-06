import React from "react";
import { useDispatch, useSelector } from "react-redux";
import reddit from "../../api/reddit";
import Post from "../../features/Post/Post";
import Comments from "../../features/Comments/Comments";
import "./Home.css";

const Home = () => {
    
    const { isLoading, error, searchTerm, selectedSubreddit } = reddit;
    const posts = reddit.fetchPosts;
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