'use strict';

/**
 * @ngdoc function
 * @name enqueteSatisfactionApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the enqueteSatisfactionApp
 */
myApp.controller('MainCtrl', function ($scope, $http, $location, $anchorScroll, emails, url, Notes ) {

  this.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];

  $scope.eval ={};

  // afficher le chargement
  $scope.loading = true;
  emails.getEmails().then(function (data) {
    $scope.emails = data.emails;
    Notes.getNotes().then(function (data) {
      var notes = data.notes;
      $scope.first = notes.slice(0,4);
      $scope.second = notes.slice(4,8);
      $scope.third = notes.slice(8,12);
      $scope.loading = false;
    });

  })

  // recuperer les ids des notes et les mettre dans leur tableau respective





  // message pour afficher
  $scope.message = 'Veuillez vérifier toutes les informations saisies';

  // initialisation pour affichage des bloc d'erreur et de succée
  $scope.info_error = false;
  $scope.info_valid = false;
  $scope.info_email = false;

  //  afficher la donnée selectionée
  $scope.afficher = function (data) {

  };

  // ajouter les notes a notre base de donnée
  $scope.submitForm = function (inValid, evaluation) {

    if (!inValid) {
      recuperer(evaluation);
    } else {
      $scope.info_error = true;
      $scope.info_valid = false;
      $scope.info_email = false;
      $scope.message = 'Veuillez vérifier toutes les informations saisies';
      $anchorScroll();
    }
  };

  var recuperer = function (evaluation) {
    $scope.eval = evaluation;
    if( exists($scope.emails, evaluation.user.email) === true){
      $scope.info_error = false;
      $scope.info_valid = false;
      $scope.info_email = true;
      $scope.message = 'Cette email existe dejà dans la base de donnée.';
      //$location.hash('formDiv');
      $anchorScroll();
    } else {
      $http.post(url + 'evaluer', evaluation)
        .success(function (data) {
          $http.post(url+ 'pdf', evaluation)
            .success(function (data) {
            }).error(function (data) {
          });
          $scope.eval = '';
          $scope.evalForm.$setPristine();
          $scope.message = "Merci d'avoir participer a notre enquete";
          $scope.emails.push(evaluation.user.email);
          $scope.info_valid = true;
          $scope.info_error = false;
          $scope.info_email = false;
          $anchorScroll();
        }).error(function (data) {
          console.log(data.message)
          $scope.message = "Il y'a une erreur au niveau du serveur";
          $scope.info_error = true;
          $scope.info_valid = false;
          $scope.info_email = false;
          $anchorScroll();
        });
      }

  };

    $scope.closeErrorMsg = function () {
      $scope.info_error = false;
    };

    $scope.closeSuccesMsg = function () {
      $scope.info_valid = false;
    };

    // verifier si un element exist dans un tableau ou pas
    var exists = function (datas, data) {
      return (datas.indexOf(data) !== -1) ? true : false;
    };

});
