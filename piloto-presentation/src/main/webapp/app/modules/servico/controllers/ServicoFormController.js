define([], function() {


 	ServicoFormController.$inject = ['ServicoService', '$state', 'entity', '$scope', 'gumgaController'];

 	function ServicoFormController(ServicoService, $state, entity, $scope, gumgaController) {

    	gumgaController.createRestMethods($scope, ServicoService, 'servico');



    
    	$scope.servico.data = entity.data || {};
		$scope.continue = {};

        $scope.uploadStart = function() {
            console.log('uploadStart')
        }
        $scope.uploadComplete = function(e) {
            console.log('uploadComplete')
            console.log(e)
        }

		$scope.servico.on('putSuccess',function(data){
			$state.go('servico.list');
		});
 	}
	
	return ServicoFormController;   
});