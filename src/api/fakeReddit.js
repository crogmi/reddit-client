// create fake json object to be used
// Later on, retrieve the json object through the reddit api

const reddit = {
    searchTerm: "",
    selectedSubreddit: "nba",
    isLoading: false,
    error: false,
    fetchPosts: {
        "123": {
            title: "Los Angeles Clippers",
            url: "https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/lac.png",
            score: 1900,
            num_comments: 2,
            view_count: 5000,
            ups: 2000,
            downs: 100,
            selftext: "The Los Angeles Clippers free agency has been a flop.",
            user: "Chris Ogami",
            comments: [
                {
                    user: "Charles", 
                    text: "The Clippers are bad"
                },
                {
                    user: "Bryce",
                    text: "They will always be the JV team in the league"
                }
            ]
        },
        "456": {
            title: "Los Angeles Lakers",
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/1200px-Los_Angeles_Lakers_logo.svg.png",
            score: 5500,
            num_comments: 2,
            view_count: 10000,
            ups: 5500,
            downs: 0,
            selftext: "The Los Angeles Lakers continue to be the best team in LA.",
            user: "Everyone else",
            comments: [
                {
                    user: "Patrick", 
                    text: "Gang gang."
                },
                {
                    user: "Bryce",
                    text: "We are winners."
                }
            ]
        }
    }
}

export default reddit;