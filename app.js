let Twitter = require('twitter');
let config = require('./config.js');

let T = new Twitter(config);

// Setting up the tweet search core

let params = {
    q: "@hexxalle",
    count: 10,
    result_type: 'recent',
    lang: 'fr'
}

T.get('search/tweets', params, function(err, data, response) {
    if (!err){
        //Get the ID of the tweet as result
        for (let i=0; i < data.statuses.length; i++) {
            let id = {id: data.statuses[i].id_str};
        }
        T.post('favorites/create', id, function(err, response)
        {
            if (err) {
                console.log(err[0].message)
            } else {
                let username = response.user_screen_name;
                let tweetId = response.id_str;

                console.log('Favorited : ', 'https://twitter.com/${username}/status/${tweetId}')
            }
        })
    } else {
        console.log("There might be a small mistake somewhere...")
    }
})
