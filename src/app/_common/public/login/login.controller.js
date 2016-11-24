(function () {
  "use strict";

  angular
    .module("app")
    .controller("PublicLoginController", PublicLoginController);

  function PublicLoginController($timeout, LoginService, $state, $localStorage) {
    var vm = this;
    vm.showPassword = false;
    vm.typePasswordAvalable = ["password", "text"];
    vm.errorMessage = "";
    vm.getPasswordType = getPasswordType;
    function getPasswordType() {
      var passwordType = vm.typePasswordAvalable[0];
      if (vm.showPassword) {
        passwordType = vm.typePasswordAvalable[1];
      }
      return passwordType;
    }



  }
})();
