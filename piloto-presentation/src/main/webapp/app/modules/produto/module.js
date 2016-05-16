define(function(require) {

  var APILocation = require('app/apiLocations');
  require('angular-ui-router');
  require('app/modules/produto/services/module');
  require('app/modules/produto/controllers/module');

  return require('angular')
    .module('app.produto', [
      'ui.router',
      'app.produto.controllers',
      'app.produto.services',
      'gumga.core'
    ])
    .config(function($stateProvider, $httpProvider) {
      $stateProvider
        .state('produto.list', {
          url: '/list',
          templateUrl: 'app/modules/produto/views/list.html',
          controller: 'ProdutoListController'
        })
        .state('produto.insert', {
          url: '/insert',
          templateUrl: 'app/modules/produto/views/form.html',
          controller: 'ProdutoFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/produto/new');
            }]
          }
        })
        .state('produto.edit', {
          url: '/edit/:id',
          templateUrl: 'app/modules/produto/views/form.html',
          controller: 'ProdutoFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/produto/' + $stateParams.id);
            }]
          }
        });
    })
});