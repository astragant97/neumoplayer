fetch("https://lastfmdimashirokovv1.p.rapidapi.com/getAlbumInfo", {
	"method": "POST",
	"headers": {
		"x-rapidapi-host": "LastFmdimashirokovV1.p.rapidapi.com",
		"x-rapidapi-key": "5debaa16b4mshe184ceb62e7d2b8p1413b2jsn42f446e75503",
		"content-type": "application/x-www-form-urlencoded"
	},
	"body": {}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});