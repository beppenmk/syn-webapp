(function () {
  "use strict";

  angular
    .module("app")
    .factory("LoginService", LoginService);
  function LoginService($log, $q, $http, CONFIG, FirebaseService) {
    var service = {
      login: login,
      isLogged: isLogged,
      getUserLogged: getUserLogged,

    };
    return service;


    /**
     * @param data
     * wrapper di FirebaseService
     */
    function login(data) {
      var deferred = $q.defer();
      FirebaseService.login(data).then(function (user) {
        deferred.resolve(user);
      }, function (error) {
        deferred.reject(error);
      });
      return deferred.promise;


    }

    function isLogged() {
      $log.debug('LoginService->'+FirebaseService.isLogged());
      return FirebaseService.isLogged();
    }

    function getUserLogged() {
      return FirebaseService.getUserLogged();
    }
  }
})();
