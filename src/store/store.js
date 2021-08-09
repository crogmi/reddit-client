import { configureStore, combineReducers } from "@reduxjs/toolkit";
import redditReducer from "./redditSlice";
import subredditReducer from "./subRedditSlice";
// Add imports for all reducers here


export default configureStore({
    reducer: combineReducers({
      reddit: redditReducer,
      subreddit: subredditReducer
    })
});

