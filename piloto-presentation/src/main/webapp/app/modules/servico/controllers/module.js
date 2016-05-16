define(function (require) {
    var angular = require('angular');
    require('app/modules/servico/services/module');
    require('angular-ui-router');

    return angular
            .module('app.servico.controllers', ['app.servico.services','ui.router'])
            .controller('ServicoFormController', require('app/modules/servico/controllers/ServicoFormController'))
            .controller('ServicoListController', require('app/modules/servico/controllers/ServicoListController'));
});