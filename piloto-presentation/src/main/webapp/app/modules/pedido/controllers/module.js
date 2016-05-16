define(function (require) {
    var angular = require('angular');
    require('app/modules/pedido/services/module');
    require('angular-ui-router');

    return angular
            .module('app.pedido.controllers', ['app.pedido.services','ui.router'])
            .controller('ModalItemPedidoServicoController', require('app/modules/pedido/controllers/ModalItemPedidoServicoController'))
            .controller('ModalItemPedidoProdutoController', require('app/modules/pedido/controllers/ModalItemPedidoProdutoController'))
            .controller('PedidoFormController', require('app/modules/pedido/controllers/PedidoFormController'))
            .controller('PedidoListController', require('app/modules/pedido/controllers/PedidoListController'));
});