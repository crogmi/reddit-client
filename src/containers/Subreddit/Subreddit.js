import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubreddits, selectSubreddits } from "../../store/subRedditSlice";
import { setSelectedSubreddit, selectSelectedSubreddit } from "../../store/redditSlice";
import "./Subreddit.css";

const Subreddit = () => {
    const dispatch = useDispatch();
    const subreddits = useSelector(selectSubreddits);
    const selectedSubreddit = useSelector(selectSelectedSubreddit);

    useEffect(() => {
        dispatch(fetchSubreddits());
    }, [dispatch]);

    return (
        <div className="subreddit-container">
            <h2>Subreddits</h2>
            <ul className="subreddits-list">
                {subreddits.map((subreddit) => {
                    <li key={subreddit.id}
                        className="subreddit-link">
                        <button type="button"
                                on-click={() => dispatch(setSelectedSubreddit(subreddit.url))} >
                            <img src={subreddit.icon_img} 
                                 alt=''
                                 className="subreddit-icon" />
                            <h3>{subreddit.display_name}</h3>
                        </button>
                    </li>
                })}
            </ul>
        </div>
    )
};

export default Subreddit;
