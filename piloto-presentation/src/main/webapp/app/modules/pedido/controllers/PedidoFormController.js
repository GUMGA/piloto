define([], function() {


 	PedidoFormController.$inject = ['PedidoService', '$state', 'entity', '$scope', 'gumgaController', 'ClienteService'];

 	function PedidoFormController(PedidoService, $state, entity, $scope, gumgaController, ClienteService) {

    	gumgaController.createRestMethods($scope, PedidoService, 'pedido');


	    gumgaController.createRestMethods($scope, ClienteService, 'cliente');
	    $scope.cliente.methods.search('nome','');    

    
    	$scope.pedido.data = entity.data || {};
		$scope.pedido.data.quando = ($scope.pedido.data.quando == undefined || $scope.pedido.data.quando == "") ? new Date() : new Date($scope.pedido.data.quando);
		
		$scope.pedido.data.produtos = $scope.pedido.data.produtos || [];
		$scope.pedido.data.servicos = $scope.pedido.data.servicos || [];
		$scope.continue = {};
	
		$scope.pedido.on('putSuccess',function(data){
			$state.go('pedido.list');
		});
 	}
	
	return PedidoFormController;   
});