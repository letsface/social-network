"use strict";

// create an application instance
function SocialNetwork(config) {
	
	this.sendMessage = function(network, type, message){

    var obj = require('./'+network);
    var shareObj = new obj(config);

		if(type==="text")
		{
			if(network!==undefined)
			{
				try
				{
					shareObj.shareMessage(message);
				}
        catch(err)
        {
          console.log("An error occured : "+ err);
          throw err;
        }
			}
			else
			{
				throw "required parameter network is missing";
			}
		} else {
			throw "type " + type + " is undefined ";
		}
	};
};

module.exports = SocialNetwork;