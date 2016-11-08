'use strict';

/**
 * @ngdoc service
 * @name enqueteSatisfactionApp.typeNote
 * @description
 * # typeNote
 * Factory in the enqueteSatisfactionApp.
 */

myApp.factory('Notes', function ($http, $q, url) {
    var factory = {
      notes : false,
      getNotes : function () {
        var deferred = $q.defer();
        if(factory.notes !== false) {
          deferred.resolve(factory.notes);
        }else {
          $http.get(url+'/notes')
            .success(function (data, status) {
              factory.notes = data;
              deferred.resolve(factory.notes);
            }).error(function (data, status) {
            deferred.reject('Impossible de récupérer les articles');
          });
        }
        return deferred.promise;
      }
    };
    return factory;
});
