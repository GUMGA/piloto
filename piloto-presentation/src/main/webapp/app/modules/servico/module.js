define(function(require) {

  var APILocation = require('app/apiLocations');
  require('angular-ui-router');
  require('app/modules/servico/services/module');
  require('app/modules/servico/controllers/module');

  return require('angular')
    .module('app.servico', [
      'ui.router',
      'app.servico.controllers',
      'app.servico.services',
      'gumga.core'
    ])
    .config(function($stateProvider, $httpProvider) {
      $stateProvider
        .state('servico.list', {
          url: '/list',
          templateUrl: 'app/modules/servico/views/list.html',
          controller: 'ServicoListController'
        })
        .state('servico.insert', {
          url: '/insert',
          templateUrl: 'app/modules/servico/views/form.html',
          controller: 'ServicoFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/servico/new');
            }]
          }
        })
        .state('servico.edit', {
          url: '/edit/:id',
          templateUrl: 'app/modules/servico/views/form.html',
          controller: 'ServicoFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/servico/' + $stateParams.id);
            }]
          }
        });
    })
});