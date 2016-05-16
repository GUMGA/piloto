define(function(require) {
   require('angular')
   .module('app.pedido.services', [])
   .service('PedidoService', require('app/modules/pedido/services/PedidoService'));
});