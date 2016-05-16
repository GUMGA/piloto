define(function (require) {
    var angular = require('angular');
    require('app/modules/entrega/services/module');
    require('angular-ui-router');

    return angular
            .module('app.entrega.controllers', ['app.entrega.services','ui.router'])
            .controller('EntregaFormController', require('app/modules/entrega/controllers/EntregaFormController'))
            .controller('EntregaListController', require('app/modules/entrega/controllers/EntregaListController'));
});