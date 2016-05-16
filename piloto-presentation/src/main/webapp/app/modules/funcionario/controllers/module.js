define(function (require) {
    var angular = require('angular');
    require('app/modules/funcionario/services/module');
    require('angular-ui-router');

    return angular
            .module('app.funcionario.controllers', ['app.funcionario.services','ui.router'])
            .controller('FuncionarioFormController', require('app/modules/funcionario/controllers/FuncionarioFormController'))
            .controller('FuncionarioListController', require('app/modules/funcionario/controllers/FuncionarioListController'));
});