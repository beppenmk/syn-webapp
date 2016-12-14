(function () {
  "use strict";

  angular
    .module("app")
    .factory("LoginService", LoginService);
  function LoginService($q, $http, CONFIG) {
    var service = {
      login: login,
      register: register
    };
    return service;

    function login(username, password) {

    }

    function register(user) {

    }
  }
})();
