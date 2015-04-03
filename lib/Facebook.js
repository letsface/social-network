var BaseSocialNetwork = require('./BaseSocialNetwork');

var Facebook = function() {
};
Facebook.prototype = new BaseSocialNetwork();

Facebook.prototype.init = function(params) {
      this.networkName = 'facebook';
};

Facebook.prototype.shareText = function(text) {
  // share it baby
};

Facebook.prototype.shareUrl = function(url) {
  // share me!
};

module.exports = Facebook;

