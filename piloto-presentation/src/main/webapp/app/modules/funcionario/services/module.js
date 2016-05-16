define(function(require) {
   require('angular')
   .module('app.funcionario.services', [])
   .service('FuncionarioService', require('app/modules/funcionario/services/FuncionarioService'));
});