// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngCordova', 'satellizer'])

.run(function($ionicPlatform, $rootScope, $auth, $state) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    // Satellizer Logout function
    $rootScope.logout = function() {
          $auth.logout().then(function() {
              // Remove the authenticated user from local storage
              localStorage.removeItem('user');
              // Remove the current user info from rootscope
              $rootScope.currentUser = null;
              $state.go('tab.home');
          });
          }
  }); // End Ionic Ready 
}) // End Run 

.config(function($stateProvider, $urlRouterProvider, $authProvider) {
 
  $authProvider.loginUrl = 'http://gramples.app/api/v1/authenticate'; //or whatever your api url is
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.home', {
    url: '/home',
    permissions: {
              except: ['anonymous'],
              redirectTo: 'app.auth'
            }, 
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-home.html',
        controller: 'HomeCtrl'
      }
    }
  })

  .state('tab.submitgrample', {
      url: '/submitgrample',
      views: {
        'tab-submitgrample': {
          templateUrl: 'templates/tab-submitgrample.html',
          controller: 'SubmitGramplesCtrl'
        }
      }
    })

  .state('tab.findgrample', {
      url: '/findgrample',
      views: {
        'tab-findgrample': {
          templateUrl: 'templates/tab-findgrample.html',
          controller: 'FindGramplesCtrl'
        }
      }
    })

  .state('tab.mygramples', {
      url: '/mygramples',
      permissions: {
                except: ['anonymous'],
                redirectTo: 'app.auth'
              }, 
      views: {
        'tab-mygramples': {
          templateUrl: 'templates/tab-grample.html',
          controller: 'MyGramplesCtrl'
        }
      }
    })

    .state('tab.grample-detail', {
      url: '/mygramples/:grampleId',
      views: {
        'tab-mygramples': {
          templateUrl: 'templates/grample-detail.html',
          controller: 'MyGrampleDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })

  .state('tab.login', {
      url: '/login',
      views: {
        'tab-login': {
          templateUrl: 'templates/tab-login.html',
          controller: 'AuthCtrl'
        }
      }
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

});
