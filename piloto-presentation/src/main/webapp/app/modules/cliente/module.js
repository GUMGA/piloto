define(function(require) {

  var APILocation = require('app/apiLocations');
  require('angular-ui-router');
  require('app/modules/cliente/services/module');
  require('app/modules/cliente/controllers/module');

  return require('angular')
    .module('app.cliente', [
      'ui.router',
      'app.cliente.controllers',
      'app.cliente.services',
      'gumga.core'
    ])
    .config(function($stateProvider, $httpProvider) {
      $stateProvider
        .state('cliente.list', {
          url: '/list',
          templateUrl: 'app/modules/cliente/views/list.html',
          controller: 'ClienteListController'
        })
        .state('cliente.insert', {
          url: '/insert',
          templateUrl: 'app/modules/cliente/views/form.html',
          controller: 'ClienteFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/cliente/new');
            }]
          }
        })
        .state('cliente.edit', {
          url: '/edit/:id',
          templateUrl: 'app/modules/cliente/views/form.html',
          controller: 'ClienteFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/cliente/' + $stateParams.id);
            }]
          }
        });
    })
});