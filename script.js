var giphy_url = "http://api.giphy.com/v1/gifs/search?q=kids&api_key=cwa0QFQaDVpqX74kWi8oygXzdghLiMJV&limit=5";
var trivia_api = "https://the-trivia-api.com/api/question/63951fffe55fa75b149597b7";
//var trivia_api = "https://the-trivia-api.com/api/questions?&tags=colours&difficulty=easy";

// Giphy API
fetch(giphy_url, {})
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    });

// Trivia API
fetch(trivia_api, {})
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    });