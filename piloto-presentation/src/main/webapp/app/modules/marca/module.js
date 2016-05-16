define(function(require) {

  var APILocation = require('app/apiLocations');
  require('angular-ui-router');
  require('app/modules/marca/services/module');
  require('app/modules/marca/controllers/module');

  return require('angular')
    .module('app.marca', [
      'ui.router',
      'app.marca.controllers',
      'app.marca.services',
      'gumga.core'
    ])
    .config(function($stateProvider, $httpProvider) {
      $stateProvider
        .state('marca.list', {
          url: '/list',
          templateUrl: 'app/modules/marca/views/list.html',
          controller: 'MarcaListController'
        })
        .state('marca.insert', {
          url: '/insert',
          templateUrl: 'app/modules/marca/views/form.html',
          controller: 'MarcaFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/marca/new');
            }]
          }
        })
        .state('marca.edit', {
          url: '/edit/:id',
          templateUrl: 'app/modules/marca/views/form.html',
          controller: 'MarcaFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/marca/' + $stateParams.id);
            }]
          }
        });
    })
});