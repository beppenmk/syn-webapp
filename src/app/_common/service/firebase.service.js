(function () {
  "use strict";
//https://github.com/firebase/angularfire/blob/master/docs/migration/1XX-to-2XX.md
  angular
    .module("app")
    .factory("FirebaseService", FirebaseService);
  function FirebaseService($log, CONFIG, $firebaseAuth, $firebaseObject, $firebaseArray) {


    var service = {
      login: login
    };
    return service;


    function login(data) {

      var loginObj = $firebaseAuth();

      loginObj.$signInWithEmailAndPassword(data.email, data.password)
        .then(function (user) {
          // Success callback
          $log.debug(user)
        }, function (error) {
          // Failure callback
          console.log('Authentication failure');
        });

    }
  }
})();
