import { createSlice } from "@reduxjs/toolkit";
import { getSubreddits } from "../api/reddit";

export const subredditsSlice = createSlice({
    name:"subreddits",
    initialState: {
        subreddits: [],
        isLoading: false,
        hasError: false
    },
    reducers: {
        startGetSubreddits(state) {
            state.isLoading = true;
            state.hasError = false;
        },
        getSubredditsSuccess(state, action) {
            state.isLoading = false;
            state.hasError = false;
            state.subreddits = action.payload;
        },
        getSubredditsFailed(state) {
            state.isLoading = false;
            state.hasError = true;
        }
    },
});

export const {
    startGetSubreddits,
    getSubredditsSuccess,
    getSubredditsFailed
} = subredditsSlice.actions;

export default subredditsSlice.reducer;

export const fetchSubreddits = () => async (dispatch) => {
    try {
        dispatch(startGetSubreddits());
        const subreddits = await getSubreddits();
        dispatch(getSubredditsSuccess(subreddits));
    } catch (e) {
        dispatch(getSubredditsFailed());
    }
};

export const selectSubreddits = (state) => state.subreddits.subreddits;