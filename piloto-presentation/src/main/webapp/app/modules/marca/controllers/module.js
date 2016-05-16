define(function (require) {
    var angular = require('angular');
    require('app/modules/marca/services/module');
    require('angular-ui-router');

    return angular
            .module('app.marca.controllers', ['app.marca.services','ui.router'])
            .controller('MarcaFormController', require('app/modules/marca/controllers/MarcaFormController'))
            .controller('MarcaListController', require('app/modules/marca/controllers/MarcaListController'));
});