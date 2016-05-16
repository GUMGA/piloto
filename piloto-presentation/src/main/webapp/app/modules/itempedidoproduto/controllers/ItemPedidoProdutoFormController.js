define([], function() {


 	ItemPedidoProdutoFormController.$inject = ['ItemPedidoProdutoService', '$state', 'entity', '$scope', 'gumgaController', 'ProdutoService'];

 	function ItemPedidoProdutoFormController(ItemPedidoProdutoService, $state, entity, $scope, gumgaController, ProdutoService) {

    	gumgaController.createRestMethods($scope, ItemPedidoProdutoService, 'itempedidoproduto');


	    gumgaController.createRestMethods($scope, ProdutoService, 'produto');
	    $scope.produto.methods.search('nome','');    

    
    	$scope.itempedidoproduto.data = entity.data || {};
		$scope.itempedidoproduto.data.entregas = $scope.itempedidoproduto.data.entregas || [];
		$scope.continue = {};
	
		$scope.itempedidoproduto.on('putSuccess',function(data){
			$state.go('itempedidoproduto.list');
		});
 	}
	
	return ItemPedidoProdutoFormController;   
});