define(function (require) {
    var angular = require('angular');
    require('app/modules/itempedidoproduto/services/module');
    require('angular-ui-router');

    return angular
            .module('app.itempedidoproduto.controllers', ['app.itempedidoproduto.services','ui.router'])
            .controller('ModalEntregaController', require('app/modules/itempedidoproduto/controllers/ModalEntregaController'))
            .controller('ItemPedidoProdutoFormController', require('app/modules/itempedidoproduto/controllers/ItemPedidoProdutoFormController'))
            .controller('ItemPedidoProdutoListController', require('app/modules/itempedidoproduto/controllers/ItemPedidoProdutoListController'));
});