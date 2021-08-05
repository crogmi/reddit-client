import { createSlice } from "@reduxjs/toolkit";


export const subredditSlice = createSlice({
    name:"subreddit",
    initialState: {
        subreddits: [],
        isLoading: false,
        hasError: false
    },
    reducers: {

    },
})