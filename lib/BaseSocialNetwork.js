/**
 * Base class for social network
 * extend it
 */
var BaseSocialNetwork = function() {
};

BaseSocialNetwork.prototype.init = function(params) {
  this.networkName = 'base-network';
  this.params = params;
};

BaseSocialNetwork.prototype.shareText = function(text) {
  throw new Error('Share text function is not implemented for the network ' + this.networkName);
};

BaseSocialNetwork.prototype.shareUrl = function(url) {
  throw new Error('Share url function is not implemented for the network ' + this.networkName);
}; 

module.exports = BaseSocialNetwork;
