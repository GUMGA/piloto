define(function (require) {
    var angular = require('angular');
    require('app/modules/produto/services/module');
    require('angular-ui-router');

    return angular
            .module('app.produto.controllers', ['app.produto.services','ui.router'])
            .controller('ProdutoFormController', require('app/modules/produto/controllers/ProdutoFormController'))
            .controller('ProdutoListController', require('app/modules/produto/controllers/ProdutoListController'));
});