import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubreddits, selectSubreddits } from "../../store/subRedditSlice";
import { setSelectedSubreddit, selectSelectedSubreddit } from "../../store/redditSlice";
import "./Subreddit.css";

const Subreddits = () => {
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
                    return (
                        <li key={subreddit.id}
                            className={`${selectedSubreddit === subreddit.url && "selected-subreddit"}`}>
                            <button type="button"
                                    on-click={() => dispatch(setSelectedSubreddit(subreddit.url))} >
                                <img src={subreddit.icon_img} // Needs to put in another option for an icon if there is no icon available
                                    alt={`${subreddit.display_name}`}
                                    className="subreddit-icon" />
                                {subreddit.display_name}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
};

export default Subreddits;
