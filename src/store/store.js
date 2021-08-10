import { configureStore, combineReducers } from "@reduxjs/toolkit";
import redditReducer from "./redditSlice";
import subredditReducer from "./subRedditSlice";

export default configureStore({
    reducer: combineReducers({
      reddit: redditReducer,
      subreddits: subredditReducer
    })
});

