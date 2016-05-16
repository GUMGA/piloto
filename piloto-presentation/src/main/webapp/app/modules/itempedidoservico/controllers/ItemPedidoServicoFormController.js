define([], function() {


 	ItemPedidoServicoFormController.$inject = ['ItemPedidoServicoService', '$state', 'entity', '$scope', 'gumgaController', 'ServicoService'];

 	function ItemPedidoServicoFormController(ItemPedidoServicoService, $state, entity, $scope, gumgaController, ServicoService) {

    	gumgaController.createRestMethods($scope, ItemPedidoServicoService, 'itempedidoservico');


	    gumgaController.createRestMethods($scope, ServicoService, 'servico');
	    $scope.servico.methods.search('nome','');    

    
    	$scope.itempedidoservico.data = entity.data || {};
		$scope.continue = {};
	
		$scope.itempedidoservico.on('putSuccess',function(data){
			$state.go('itempedidoservico.list');
		});
 	}
	
	return ItemPedidoServicoFormController;   
});