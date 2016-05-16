define(function(require) {
   require('angular')
   .module('app.entrega.services', [])
   .service('EntregaService', require('app/modules/entrega/services/EntregaService'));
});