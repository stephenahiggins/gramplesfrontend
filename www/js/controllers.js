angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {})

.controller('MyGramplesCtrl', function($scope, Gramples) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.gramples = Gramples.all();
  $scope.remove = function(gramples) {
    Gramples.remove(Gramples);
  };
})

.controller('SubmitGramplesCtrl', function($scope) {})

.controller('FindGramplesCtrl', function($scope) {})

.controller('MyGrampleDetailCtrl', function($scope, $stateParams, Gramples) {
  console.log($scope, $stateParams, Gramples); 
  $scope.gramples = Gramples.get($stateParams.grampleId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})
/*
  Declare the formdata variable for the parent controller
 */
.controller('formData',  function($scope) {
    $scope.imgURI = 'http://placehold.it/300x300';  
    var formData = {
        img: null, 
        foo: 'bar'
    }
}) 

.controller('takePhoto', function($scope, $cordovaCamera){
     $scope.takePhoto = function() {
       var options = {
       fileKey: "avatar",
       fileName: "image.png",
       chunkedMode: "false",
       mimeType: "false",
       quality: 75,
       destinationType: Camera.DestinationType.DATA_URL,
       sourceType: Camera.PictureSourceType.CAMERA,
       allowEdit: true,
       encodingType: Camera.EncodingType.JPEG,
       targetWidth: 300,
       targetHeight: 300,
       popoverOptions: CameraPopoverOptions,
       saveToPhotoAlbum: false
   };
    $cordovaCamera.getPicture(options).then(function(imageData) {
      $scope.imgURI = "data:image/jpeg;base64," + imageData;
      formData.img = $scope.imgURI; 
      console.log(formData); 
       console.log($scope.formData); 
          }, function(err) {
         // An error occured. Show a message to the user 
        }); 
     };
})

.controller("uploadController", function($scope, $cordovaFileTransfer) {
 
    $scope.upload = function() {
      console.log('Wag:', formData); 
      /*
        var options = {
            fileKey: "avatar",
            fileName: "image.png",
            chunkedMode: false,
            mimeType: "image/png"
        };
        $cordovaFileTransfer.upload("http://192.168.56.1:1337/file/upload", "/android_asset/www/img/ionic.png", options).then(function(result) {
            console.log("SUCCESS: " + JSON.stringify(result.response));
        }, function(err) {
            console.log("ERROR: " + JSON.stringify(err));
        }, function (progress) {
            // constant progress updates
        });
        */
    }
});
