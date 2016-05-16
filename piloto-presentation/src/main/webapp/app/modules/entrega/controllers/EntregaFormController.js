define([], function() {


 	EntregaFormController.$inject = ['EntregaService', '$state', 'entity', '$scope', 'gumgaController'];

 	function EntregaFormController(EntregaService, $state, entity, $scope, gumgaController) {

    	gumgaController.createRestMethods($scope, EntregaService, 'entrega');



    
    	$scope.entrega.data = entity.data || {};
		$scope.entrega.data.quando = ($scope.entrega.data.quando == undefined || $scope.entrega.data.quando == "") ? new Date() : new Date($scope.entrega.data.quando);
		
		$scope.continue = {};
	
		$scope.entrega.on('putSuccess',function(data){
			$state.go('entrega.list');
		});
 	}
	
	return EntregaFormController;   
});