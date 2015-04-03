var path = require('path');

module.exports = function(networkName, params) {
  var Network;
  try {
    Network = require(path('.', 'lib', networkName));
  }
  catch(e) {
    throw new Error('Network ' + networkName + ' is not implemented');
  }

  var network = new Network();
  network.init(params);
  return network;
}
