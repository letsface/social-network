var BaseSocialNetwork = require('./BaseSocialNetwork');
var Fb = require('fb')

var Facebook = function() {
};
Facebook.prototype = new BaseSocialNetwork();

Facebook.prototype.init = function(params) {
  this.networkName = 'facebook';
  this.params =  params;
};

Facebook.prototype.shareText = function(text) {
  // share it baby
};

Facebook.prototype.shareUrl = function(url) {
	var parameters = {};
	parameters.link = url;

// here we still need access_token generated after oauth2 authentication
	parameters.access_token = this.params.access_token; 
	Fb.api('me/feed', 'post', parameters, function(res){
		if (!res || res.error){
			console.log(!res? 'error occurred': res.error);
		}
    console.log('Post Id: ' + res.id);
	})

};

module.exports = Facebook;

