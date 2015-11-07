angular.module('starter.services', [])

.factory('Topics', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var topics = [{
    id: 0,
    name: 'Raspberry Pi',
    lastText: 'The Raspberry Pi is a low cost, credit-card sized computer that plugs into a computer monitor or TV, and uses a standard keyboard and mouse. It is a capable little device that enables people of all ages to explore computing, and to learn how to program in languages like Scratch and Python. It’s capable of doing everything you’d expect a desktop computer to do, from browsing the internet and playing high-definition video, to making spreadsheets, word-processing, and playing games.',
    image: 'img/raspberry-square.png',
    url: 'https://www.raspberrypi.org'
  }, {
    id: 1,
    name: 'Arduino',
    lastText: 'Arduino is an open-source computer hardware and software company, project and user community that designs and manufactures microcontroller-based kits for building digital devices and interactive objects that can sense and control objects in the physical world.',
    image: 'img/arduino.png',
    url: 'https://www.arduino.cc/'
  }, {
    id: 2,
    name: 'BeagleBone',
    lastText: 'BeagleBone is an $89 MSRP, credit-card-sized Linux computer that connects to the Internet and runs software such as Android 4.0 and Ubuntu.',
    image: 'img/beagle-board.png',
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
