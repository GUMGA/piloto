define(function(require) {

  var APILocation = require('app/apiLocations');
  require('angular-ui-router');
  require('app/modules/entrega/services/module');
  require('app/modules/entrega/controllers/module');

  return require('angular')
    .module('app.entrega', [
      'ui.router',
      'app.entrega.controllers',
      'app.entrega.services',
      'gumga.core'
    ])
    .config(function($stateProvider, $httpProvider) {
      $stateProvider
        .state('entrega.list', {
          url: '/list',
          templateUrl: 'app/modules/entrega/views/list.html',
          controller: 'EntregaListController'
        })
        .state('entrega.insert', {
          url: '/insert',
          templateUrl: 'app/modules/entrega/views/form.html',
          controller: 'EntregaFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/entrega/new');
            }]
          }
        })
        .state('entrega.edit', {
          url: '/edit/:id',
          templateUrl: 'app/modules/entrega/views/form.html',
          controller: 'EntregaFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/entrega/' + $stateParams.id);
            }]
          }
        });
    })
});