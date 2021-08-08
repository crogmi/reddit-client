export const API_ROOT = "https://www.reddit.com";

export const getSubredditPosts = async (subreddit) => {
    const response = await fetch(`${API_ROOT}${subreddit}.json`);
    const json = await response.json();
    return json.data.children.map((post) => post.data);
};

export const getSubreddit = async () => {
    const resposne = await fetch(`${API_ROOT}/subreddits.json`);
    const json = await resposne.json();
    return json.data.children.map((subreddit) => subreddit.data);
};

export const getPostComments = async (post) => {
    const response = await fetch(`${API_ROOT}${post}.json`);
    const json = await response.json();
    return json[1].data.children.map((subreddit) => subreddit.data);
};