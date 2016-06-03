angular.module('starter.services', [])

    .factory('Subjects', function($http, ApiEndpoint, gramplesSettings) {
          // Might use a resource here that returns a JSON array
          return {
                getMine: function(lastpage) {
                   var promise = $http.get(ApiEndpoint.url + '/api/v1/getmysubjects')
                    .then(function(response){
                            return response.data; 
                    });  
                    return promise; 
                }, 
                getAll: function(){
                   var promise = $http.get(ApiEndpoint.url + '/api/v1/getsubjects')
                    .then(function(response){
                            return response.data; 
                    });  
                    return promise; 
                }
            } // Close return 
        }) //Close Factory

      .factory('Gramples', function($http, ApiEndpoint, gramplesSettings) {
      // Might use a resource here that returns a JSON array
          return {
                bySubject: function(subjectID) {
                   var promise = $http.get(ApiEndpoint.url + '/api/v1/getmygramplesbysubject/' + subjectID)
                    .then(function(response){
                            return response.data.original; 
                    });  
                    return promise; 
                },
                detail: function(grampleID) {
                    var promise = $http.get(ApiEndpoint.url + '/api/v1/grample/' + grampleID)
                     .then(function(response){
                            return response.data.original; 
                     });  
                    return promise;
                }, 
                submit: function(formData){
                  console.log(formData); 
                    var promise = $http.post(ApiEndpoint.url + '/api/v1/grample',
                    {
                      data: formData, 
                    })
                     .then(function(response){
                             return response.data.original; 
                     });  
                    return promise;
                }, 
                remove: function(grample) {
                      gramples.splice(gramples.indexOf(grample), 1);
                }
            } // Close Return 
      }) //Close factory
     
//A rudimentary calculation to display the appropriate rows
function getLastpage(lastpage){
    return (lastpage - 1) * (gramplesSettings.rowTake + 1);  
}
