import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import reddit from "../../api/reddit";
import Post from "../../features/Post/Post";
import "./Home.css";

const Home = () => {
    
    const { isLoading, error, searchTerm, selectedSubreddit } = reddit;
    const posts = reddit.fetchPosts;

    return (
        <div className="home">
            <Post isLoading={isLoading} 
                  error={error}
                  searchTerm={searchTerm}
                  selectedSubreddit={selectedSubreddit}
                  posts={posts} />
        </div>
    )
}

export default Home;