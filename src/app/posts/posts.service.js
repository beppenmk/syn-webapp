(function () {
  "use strict";

  angular
    .module("app")
    .factory("PostsService", PostsService);
  function PostsService(ErrorService, $q, $http, CONFIG) {
    var service = {
      getAll: getAll
    };
    return service;
    function getAll() {
      var deferred = $q.defer();
      var config = {
        /*
         headers: {
         Authorization: $localStorage.access_token
         }
         */
      };
      var uri = CONFIG.API + '/posts';
      $http.get(uri, config)
        .then(
          function (response) {
            deferred.resolve(response.data);
          },
          function (response) {
            var error = response;
            deferred.reject(error);
          }
        );
      return deferred.promise;
    }
  }
})();
