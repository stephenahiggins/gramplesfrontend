angular.module('starter.services', [])

.factory('Gramples', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var gramples = [{
    id: 0,
    name: 'Ben Sparrow',
    description: 'You on your way?',
    image: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    description: 'Hey, it\'s me',
    image: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    description: 'I should buy a boat',
    image: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    description: 'Look at my mukluks!',
    image: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    description: 'This is wicked good ice cream.',
    image: 'img/mike.png'
  }];

  return {
    all: function() {
      return gramples;
    },
    remove: function(chat) {
      gramples.splice(gramples.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < gramples.length; i++) {
        if (gramples[i].id === parseInt(chatId)) {
          return gramples[i];
        }
      }
      return null;
    }
  };
});
