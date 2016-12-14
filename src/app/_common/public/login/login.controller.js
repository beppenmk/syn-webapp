(function () {
  "use strict";

  angular
    .module("app")
    .controller("PublicLoginController", PublicLoginController);

  function PublicLoginController($log, $timeout, LoginService, $state, $localStorage) {
    var vm = this;
    vm.login = login;
    vm.register = register;


    function login() {
      $log.debug('login');
    }

    function register() {
      $log.debug('register');
    }
  }
})();
