"use strict";

var util    = require('util'),
    Promise = require('bluebird'),
    sdk     = Promise.promisifyAll(require('facebook-node-sdk'));

function Facebook(config){
  /**
   *  create an instance with the supplied config
   */
  var fb = new sdk({
    appId: config.appId,
    secret: config.secret
  }).setAccessToken(config.accessToken);

  this.shareMessage = function(message){
    fb.apiAsync('/me/feed', 'post', {'message':message}).then(function(data){console.log(data)}).catch(function(err){ throw err;});
  };
  
};

module.exports = Facebook;