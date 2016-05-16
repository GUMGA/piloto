define(function(require) {

  var APILocation = require('app/apiLocations');
  require('angular-ui-router');
  require('app/modules/funcionario/services/module');
  require('app/modules/funcionario/controllers/module');

  return require('angular')
    .module('app.funcionario', [
      'ui.router',
      'app.funcionario.controllers',
      'app.funcionario.services',
      'gumga.core'
    ])
    .config(function($stateProvider, $httpProvider) {
      $stateProvider
        .state('funcionario.list', {
          url: '/list',
          templateUrl: 'app/modules/funcionario/views/list.html',
          controller: 'FuncionarioListController'
        })
        .state('funcionario.insert', {
          url: '/insert',
          templateUrl: 'app/modules/funcionario/views/form.html',
          controller: 'FuncionarioFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/funcionario/new');
            }]
          }
        })
        .state('funcionario.edit', {
          url: '/edit/:id',
          templateUrl: 'app/modules/funcionario/views/form.html',
          controller: 'FuncionarioFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/funcionario/' + $stateParams.id);
            }]
          }
        });
    })
});