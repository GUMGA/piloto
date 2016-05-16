define(function(require) {

  var APILocation = require('app/apiLocations');
  require('angular-ui-router');
  require('app/modules/itempedidoproduto/services/module');
  require('app/modules/itempedidoproduto/controllers/module');

  return require('angular')
    .module('app.itempedidoproduto', [
      'ui.router',
      'app.itempedidoproduto.controllers',
      'app.itempedidoproduto.services',
      'gumga.core'
    ])
    .config(function($stateProvider, $httpProvider) {
      $stateProvider
        .state('itempedidoproduto.list', {
          url: '/list',
          templateUrl: 'app/modules/itempedidoproduto/views/list.html',
          controller: 'ItemPedidoProdutoListController'
        })
        .state('itempedidoproduto.insert', {
          url: '/insert',
          templateUrl: 'app/modules/itempedidoproduto/views/form.html',
          controller: 'ItemPedidoProdutoFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/itempedidoproduto/new');
            }]
          }
        })
        .state('itempedidoproduto.edit', {
          url: '/edit/:id',
          templateUrl: 'app/modules/itempedidoproduto/views/form.html',
          controller: 'ItemPedidoProdutoFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/itempedidoproduto/' + $stateParams.id);
            }]
          }
        });
    })
});