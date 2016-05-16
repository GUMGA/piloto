define(function (require) {
    var angular = require('angular');
    require('app/modules/cliente/services/module');
    require('angular-ui-router');

    return angular
            .module('app.cliente.controllers', ['app.cliente.services','ui.router'])
            .controller('ClienteFormController', require('app/modules/cliente/controllers/ClienteFormController'))
            .controller('ClienteListController', require('app/modules/cliente/controllers/ClienteListController'));
});