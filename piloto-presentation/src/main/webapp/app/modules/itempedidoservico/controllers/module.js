define(function (require) {
    var angular = require('angular');
    require('app/modules/itempedidoservico/services/module');
    require('angular-ui-router');

    return angular
            .module('app.itempedidoservico.controllers', ['app.itempedidoservico.services','ui.router'])
            .controller('ItemPedidoServicoFormController', require('app/modules/itempedidoservico/controllers/ItemPedidoServicoFormController'))
            .controller('ItemPedidoServicoListController', require('app/modules/itempedidoservico/controllers/ItemPedidoServicoListController'));
});