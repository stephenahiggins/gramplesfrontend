angular.module('starter.services', [])

.factory('getGramples', function($http, ApiEndpoint) {
  // Might use a resource here that returns a JSON array
var gramples = []
  return {
    all: function(lastpage) {
      // To put here: Calculate the currect page 
      var promise = $http.get(ApiEndpoint.url + '/api/v1/getmygramples', {
            params: {
              //page: lastpage
            }, 
        }).then(function(response){
            console.log(response.data.original); 
            return response.data.original; 
        });  
       // console.log(promise); 
        return promise; 
    },
    remove: function(grample) {
      gramples.splice(gramples.indexOf(grample), 1);
    },
    get: function(grampleId) {
      for (var i = 0; i < gramples.length; i++) {
        if (gramples[i].id === parseInt(chatId)) {
          return gramples[i];
        }
      }
      return null;
    }
  };

});


