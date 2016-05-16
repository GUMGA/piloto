define([], function() {


 	ClienteFormController.$inject = ['ClienteService', '$state', 'entity', '$scope', 'gumgaController'];

 	function ClienteFormController(ClienteService, $state, entity, $scope, gumgaController) {

    	gumgaController.createRestMethods($scope, ClienteService, 'cliente');



    
    	$scope.cliente.data = entity.data || {};
		$scope.continue = {};
	
		$scope.cliente.on('putSuccess',function(data){
			$state.go('cliente.list');
		});
 	}
	
	return ClienteFormController;   
});