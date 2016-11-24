(function () {
  "use strict";

  angular
    .module("app")
    .factory("ErrorService", ErrorService);
  function ErrorService(_, $log ) {
    var service = {
      normalizeError: normalizeError
    };
    return service;


    /**
     *
     * @param error
     * @returns {string}
     */
    function normalizeError(error) {
      var strError = "";
      if (angular.isObject(error.data)) {
        _.map(error.data, function (key, value) {
          if (angular.isObject(key) && key.code && key.message) {
            strError += key.code + ": " + key.message + " | " + value + '<br>';
          } else {
            strError += key + ": " + value + '<br>';
          }
        });
      } else if (error.data.error) {
        strError = error.data.error;
      } else {
        strError = error.data;
      }
      $log.error("Errore $http: " + strError);
      return strError;
    }




  }
})();
