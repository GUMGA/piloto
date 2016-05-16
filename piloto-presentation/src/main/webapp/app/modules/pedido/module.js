define(function(require) {

  var APILocation = require('app/apiLocations');
  require('angular-ui-router');
  require('app/modules/pedido/services/module');
  require('app/modules/pedido/controllers/module');

  return require('angular')
    .module('app.pedido', [
      'ui.router',
      'app.pedido.controllers',
      'app.pedido.services',
      'gumga.core'
    ])
    .config(function($stateProvider, $httpProvider) {
      $stateProvider
        .state('pedido.list', {
          url: '/list',
          templateUrl: 'app/modules/pedido/views/list.html',
          controller: 'PedidoListController'
        })
        .state('pedido.insert', {
          url: '/insert',
          templateUrl: 'app/modules/pedido/views/form.html',
          controller: 'PedidoFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/pedido/new');
            }]
          }
        })
        .state('pedido.edit', {
          url: '/edit/:id',
          templateUrl: 'app/modules/pedido/views/form.html',
          controller: 'PedidoFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/pedido/' + $stateParams.id);
            }]
          }
        });
    })
});