define(function(require) {
   require('angular')
   .module('app.servico.services', [])
   .service('ServicoService', require('app/modules/servico/services/ServicoService'));
});