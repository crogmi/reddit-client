import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "../../features/Post/Post";
import { setSearchTerm, 
         selectFilteredPosts,
         fetchPosts,
         fetchComments } from "../../store/redditSlice";

import "./Home.css";

const Home = () => {
    const reddit = useSelector((state) => state.reddit);
    const { isLoading, hasError, searchTerm, selectedSubreddit } = reddit;
    const posts = useSelector(selectFilteredPosts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts(selectedSubreddit));
    }, [selectedSubreddit]);

    const onToggleComments = (index) => {
        const getComments = (permalink) => {
            dispatch(fetchComments(index, permalink));
        };
        return getComments;
    };

    if (isLoading) {
        return (
            <div>

            </div>
        );
    };

    if (hasError) {
        return (
            <div>
                <div className="error">
                    <h2>Failed to load posts.</h2>
                    <button type="button"
                        onClick={() => dispatch(fetchPosts(selectedSubreddit))}>
                        Reload
                    </button>
                </div>
                
            </div>
        );
    };

    if (posts.length === 0) {
        return (
            <div className="error">
                <h2>No posts matching "{searchTerm}"</h2>
                <button type="button"
                        onClick={() => dispatch(setSearchTerm(''))}>
                    Go back to home
                </button>
            </div>
        );
    };

    return (
        <div className="home">
            {posts.map((post, index) => (
                <Post key={post.id}
                      post={post}
                      onToggleComments={onToggleComments(index)} />
            ))}
        </div>
    )
};

export default Home;