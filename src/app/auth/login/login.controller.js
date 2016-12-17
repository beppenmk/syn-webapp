(function () {
  "use strict";

  angular
    .module("app")
    .controller("PublicLoginController", PublicLoginController);

  function PublicLoginController($log, FirebaseService) {
    var vm = this;
    vm.login = login;
    vm.register = register;

    function login() {
      var data = {
        email: vm.login.username,
        password: vm.login.password
      };

      $log.debug(data);
      FirebaseService.login(data)
      //
    }

    function register() {
      $log.debug('register');
    }
  }
})();
