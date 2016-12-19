(function () {
  "use strict";

  angular
    .module("app")
    .controller("PublicLoginController", PublicLoginController);

  function PublicLoginController($log, $state, $stateParams, LoginService) {
    var vm = this;
    vm.errorMessage = $stateParams.errorMessage;
    vm.login = login;

    function login() {
      var data = {
        email: vm.login.username,
        password: vm.login.password
      };

      LoginService.login(data).then(
        function (data) {
          $log.debug(data);
          $state.go('logged.questions.list', {});
        }, function (error) {
          $log.error(error);
          vm.errorMessage = error.message;
        });
      //
    }


  }
})();
