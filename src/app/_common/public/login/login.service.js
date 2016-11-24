(function () {
  "use strict";

  angular
    .module("app")
    .factory("LoginService", LoginService);
  function LoginService($q, $http, CONFIG) {
    var service = {
      login: login,
      register: register,
      retrieve: retrieve
    };
    return service;
    function retrieve(username) {
      var deferred = $q.defer();
      var path = CONFIG.API + "/retrieve";
      var data = {
        username: username
      };
      $http.post(path, data)
        .then(
          function (response) {
            deferred.resolve(response.data);
          },
          function (response) {
            var error = HelperService.normalizeError(response);
            deferred.reject(error);
          }
        );
      return deferred.promise;
    }
    function login(username, password) {
      var deferred = $q.defer();
      var path = CONFIG.API + "/login";
      var data = {
        username: username,
        password: password
      };
      $http.post(path, data)
        .then(
          function (response) {
            deferred.resolve(response.data);
          },
          function (response) {
            var error = HelperService.normalizeError(response);
            deferred.reject(error);
          }
        );
      return deferred.promise;
    }
    function register(user) {
      var deferred = $q.defer();
      var path = CONFIG.API + "/director";
      var data = user;
      $http.post(path, data)
        .then(
          function (response) {
            deferred.resolve(response.data);
          },
          function (response) {
            var error = HelperService.normalizeError(response);
            deferred.reject(error);
          }
        );
      return deferred.promise;
    }
  }
})();
