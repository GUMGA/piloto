define(function(require) {

  var APILocation = require('app/apiLocations');
  require('angular-ui-router');
  require('app/modules/itempedidoservico/services/module');
  require('app/modules/itempedidoservico/controllers/module');

  return require('angular')
    .module('app.itempedidoservico', [
      'ui.router',
      'app.itempedidoservico.controllers',
      'app.itempedidoservico.services',
      'gumga.core'
    ])
    .config(function($stateProvider, $httpProvider) {
      $stateProvider
        .state('itempedidoservico.list', {
          url: '/list',
          templateUrl: 'app/modules/itempedidoservico/views/list.html',
          controller: 'ItemPedidoServicoListController'
        })
        .state('itempedidoservico.insert', {
          url: '/insert',
          templateUrl: 'app/modules/itempedidoservico/views/form.html',
          controller: 'ItemPedidoServicoFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/itempedidoservico/new');
            }]
          }
        })
        .state('itempedidoservico.edit', {
          url: '/edit/:id',
          templateUrl: 'app/modules/itempedidoservico/views/form.html',
          controller: 'ItemPedidoServicoFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/itempedidoservico/' + $stateParams.id);
            }]
          }
        });
    })
});