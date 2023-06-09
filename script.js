// Trivia API
fetch("https://the-trivia-api.com/v2/questions/", {
    cache: "reload",
})
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    });

// Giphy API
fetch("http://api.giphy.com/v1/gifs/search?q=kids&api_key=cwa0QFQaDVpqX74kWi8oygXzdghLiMJV&limit=5", {
    cache: "reload",
    })
    .then(function (response) {
            return response.json();
    })
    .then(function (data) {
            console.log(data);
    });