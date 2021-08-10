import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubreddits, selectSubreddits } from "../../store/subRedditSlice";
import { setSelectedSubreddit, selectSelectedSubreddit } from "../../store/redditSlice";
import "./Subreddit.css";
import Avatar from "../../features/Avatar/Avatar";

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
                            className={`${selectedSubreddit === subreddit.url && "selected-subreddit"}
                                        subreddit`}>
                            <button type="button"
                                    className="subreddit-button"
                                    onClick={() => dispatch(setSelectedSubreddit(subreddit.url))} >
                                {subreddit.icon_img ?
                                    <img src={subreddit.icon_img}
                                        alt={`${subreddit.display_name}`}
                                        className="subreddit-icon" />
                                    :
                                    <Avatar className="subreddit-avatar subreddit-icon"
                                            author={subreddit.display_name} />
                                }
                                <h3 className="subreddit-name">{subreddit.display_name}</h3>
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
};

export default Subreddits;
