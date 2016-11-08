'use strict';

myApp.factory('emails', function ($http, $q, url) {
  var factory = {
    emails : false,
    getEmails : function () {
      var deferred = $q.defer();
      if(factory.emails !== false) {
        deferred.resolve(factory.emails);
      }else {
        $http.get(url+'/emails')
          .success(function (data, status) {
            factory.emails = data;
            deferred.resolve(factory.emails);
          }).error(function (data, status) {
          deferred.reject('Impossible de récupérer les emails');
        });
      }
      return deferred.promise;
    }
  };
  return factory;
});
