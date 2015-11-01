angular.module('starter.services', [])

.factory('Topics', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var topics = [{
    id: 0,
    name: 'Raspberry Pi',
    lastText: 'The Raspberry Pi is a low cost, credit-card sized computer',
    face: 'img/raspberry-square.png',
    url: 'https://www.raspberrypi.org'
  }, {
    id: 1,
    name: 'Arduino',
    lastText: 'Open-source electronic prototyping platform allowing to create interactive electronic objects.',
    face: 'img/arduino.png',
    url: 'https://www.arduino.cc/'
  }, {
    id: 2,
    name: 'BeagleBone',
    lastText: 'BeagleBone is an $89 MSRP, credit-card-sized Linux computer that connects to the Internet and runs software such as Android 4.0 and Ubuntu.',
    face: 'img/beagle-board.png',
    url: 'http://beagleboard.org/bone'
  }];

  return {
    all: function() {
      return topics;
    },
    remove: function(topic) {
      topics.splice(topics.indexOf(topic), 1);
    },
    get: function(topicId) {
      for (var i = 0; i < topics.length; i++) {
        if (topics[i].id === parseInt(topicId)) {
          return topics[i];
        }
      }
      return null;
    }
  };
});
