define(function(require) {
    'use strict';
    require('angular');
    require('angular-ui-router');
    require('gumga-components');
    require('app/modules/login/module');
    require('app/apiLocations');
    require('app/modules/gumgatagdefinition/module');
    require('app/modules/gumgacustomfield/module');
    require('app/modules/funcionario/module');
    require('app/modules/cliente/module');
    require('app/modules/pedido/module');
    require('app/modules/itempedidoproduto/module');
    require('app/modules/itempedidoservico/module');
    require('app/modules/entrega/module');
    require('app/modules/produto/module');
    require('app/modules/servico/module');
    require('app/modules/marca/module');
    //FIMREQUIRE
    angular.module('app.core', [
        'ui.router'
        ,'gumga.core'
        ,'app.login'
        ,'app.gumgatagdefinition'
        ,'app.gumgacustomfield'
        ,'app.funcionario'
        ,'app.cliente'
        ,'app.pedido'
        ,'app.itempedidoproduto'
        ,'app.itempedidoservico'
        ,'app.entrega'
        ,'app.produto'
        ,'app.servico'
        ,'app.marca'
        //FIMINJECTIONS
    ])
    .config(function($stateProvider, $urlRouterProvider, $httpProvider, $injector, GumgaAlertProvider) {

    var template = [
        '<gumga-nav></gumga-nav>',
        '<gumga-menu menu-url="gumga-menu.json" keys-url="keys.json" image="./resources/images/gumga.png"></gumga-menu>',
        'oi<div class="gumga-container">',
        '<gumga-multi-entity-search data="multi.search"></gumga-multi-entity-search>',
        '</div>'
    ];

      $urlRouterProvider.otherwise('login/log');
      $stateProvider
        .state('login', {
          abstract: true,
          url: '/login',
          data: {
            id: 0
          },
          template: '<div ui-view style="height: 100%;"></div>'
        })
        .state('welcome', {
          url: '/welcome',
          data: {
            id: 0
          },
          templateUrl: 'app/modules/welcome/views/welcome.html'
        })
        .state('multientity', {
          url: '/multientity/:search',
          template: template.join('\n'),
          controller: 'MultiEntityController',
          controllerAs: 'multi',
          data: {
            id: 0
          },
          resolve: {
            SearchPromise: ['$stateParams', '$http', function($stateParams, $http) {
              var url = APILocations.apiLocation + '/public/multisearch/search/';
              return $http.get(url + $stateParams.search);
            }]
          }
        })
        .state('gumgatagdefinition', {
             url: '/gumgatagdefinition',
             templateUrl: 'app/modules/gumgatagdefinition/views/base.html'
        })
        .state('gumgacustomfield', {
             url: '/gumgacustomfield',
             templateUrl: 'app/modules/gumgacustomfield/views/base.html'
        })
        .state('funcionario', {
        data: {
            id: 1
        }, 
            url: '/funcionario',
            templateUrl: 'app/modules/funcionario/views/base.html'
        })

        .state('cliente', {
        data: {
            id: 1
        }, 
            url: '/cliente',
            templateUrl: 'app/modules/cliente/views/base.html'
        })

        .state('pedido', {
        data: {
            id: 1
        }, 
            url: '/pedido',
            templateUrl: 'app/modules/pedido/views/base.html'
        })

        .state('itempedidoproduto', {
        data: {
            id: 1
        }, 
            url: '/itempedidoproduto',
            templateUrl: 'app/modules/itempedidoproduto/views/base.html'
        })

        .state('itempedidoservico', {
        data: {
            id: 1
        }, 
            url: '/itempedidoservico',
            templateUrl: 'app/modules/itempedidoservico/views/base.html'
        })

        .state('entrega', {
        data: {
            id: 1
        }, 
            url: '/entrega',
            templateUrl: 'app/modules/entrega/views/base.html'
        })

        .state('produto', {
        data: {
            id: 1
        }, 
            url: '/produto',
            templateUrl: 'app/modules/produto/views/base.html'
        })

        .state('servico', {
        data: {
            id: 1
        }, 
            url: '/servico',
            templateUrl: 'app/modules/servico/views/base.html'
        })

        .state('marca', {
        data: {
            id: 1
        }, 
            url: '/marca',
            templateUrl: 'app/modules/marca/views/base.html'
        })

        //FIMROUTE


      $httpProvider.interceptors.push(function($q, $injector, $timeout) {

        return {
          'request': function(config) {
            config.headers['gumgaToken'] = window.sessionStorage.getItem('token') || 0;
            return config;
          },
          'responseError': function(rejection) {
            var $state = $injector.get('$state');
            GumgaAlertProvider.createDangerMessage(rejection.data.response, rejection.statusText);
            rejection.status == 403 && ($state.go('login.log'));
            return $q.reject(rejection);
          }
        };
      })
    })
});
