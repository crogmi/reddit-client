import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "../api/reddit";

export const redditSlice = createSlice({
    name:"reddit",
    initialState: {
        posts: [],
        searchTerm: '',
        selectedSubreddit: '/r/nba',
        isLoading: false,
        hasError: false
    },
    reducers: {
        
    }
});

// Add thunk