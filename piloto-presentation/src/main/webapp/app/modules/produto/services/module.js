define(function(require) {
   require('angular')
   .module('app.produto.services', [])
   .service('ProdutoService', require('app/modules/produto/services/ProdutoService'));
});