var url = "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=sudo_mf&count=1000"

$.get(url, function(data) {
	console.log(data);
/});