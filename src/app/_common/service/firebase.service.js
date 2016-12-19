(function () {
  "use strict";
  //https://github.com/firebase/angularfire/blob/master/docs/reference.md#getauth
  //https://github.com/firebase/angularfire/blob/master/docs/migration/1XX-to-2XX.md
  angular
    .module("app")
    .factory("FirebaseService", FirebaseService);
  function FirebaseService($log, CONFIG, $q, $firebaseAuth, $firebaseObject, $firebaseArray) {
    var loginObj = $firebaseAuth();


    var service = {
      isLogged: isLogged,
      getUserLogged: getUserLogged,
      login: login
    };
    return service;
    function getUserLogged() {
      var user = loginObj.$getAuth();
      if (user) {
        return user;
      } else {
        return null
      }
    }

    function isLogged() {
      return loginObj.$getAuth();
    }

    function login(data) {
      var deferred = $q.defer();

      loginObj.$signInWithEmailAndPassword(data.email, data.password)
        .then(function (user) {
          deferred.resolve(user);
        }, function (error) {
          deferred.reject(error);
        });
      return deferred.promise;
    }
  }
})();
