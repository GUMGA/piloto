define([], function() {


 	MarcaFormController.$inject = ['MarcaService', '$state', 'entity', '$scope', 'gumgaController'];

 	function MarcaFormController(MarcaService, $state, entity, $scope, gumgaController) {

    	gumgaController.createRestMethods($scope, MarcaService, 'marca');



    
    	$scope.marca.data = entity.data || {};
		$scope.continue = {};
	
		$scope.marca.on('putSuccess',function(data){
			$state.go('marca.list');
		});
 	}
	
	return MarcaFormController;   
});