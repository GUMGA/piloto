define(function(require) {
   require('angular')
   .module('app.cliente.services', [])
   .service('ClienteService', require('app/modules/cliente/services/ClienteService'));
});