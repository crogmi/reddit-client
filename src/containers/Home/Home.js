import React from "react";
import { useDispatch, useSelector } from "react-redux";
import reddit from "../../api/reddit";
import Post from "../../features/Post/Post";
import "./Home.css";

const Home = () => {
    
    const { isLoading, error, searchTerm, selectdSubreddit } = reddit;
    const posts = reddit.fetchPosts;

    return (
        <div className="home">
            <Post />
        </div>
    )
}

export default Home;