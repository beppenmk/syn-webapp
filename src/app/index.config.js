(function () {
  "use strict";

  angular
    .module("app")
    .config(config)
    .factory("CONFIG", ConfigService);

  /** @ngInject */
  function config(blockUIConfig) {
    blockUIConfig.template = '<div class="loader"></div>';
    // blockUIConfig.delay = 10;
    blockUIConfig.requestFilter = function (config) {
      // If the request starts with '/api/quote' ...
      if (config.url.match(/\?.*(?=polling)/)) {
        return false; // ... don't block it.
      }
    };
  }

  /** @ngInject */
  function ConfigService($log, ENV) {
    var CONFIG = {
      DEV: {
        API: "https://jsonplaceholder.typicode.com"
      },
      PROD: {
        API: "https://jsonplaceholder.typicode.com"
      }
    };
    $log.info("ENV:" + ENV);
    return CONFIG[ENV];
  }
})();
