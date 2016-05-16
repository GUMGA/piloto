define([], function() {


 	FuncionarioFormController.$inject = ['FuncionarioService', '$state', 'entity', '$scope', 'gumgaController', 'ServicoService'];

 	function FuncionarioFormController(FuncionarioService, $state, entity, $scope, gumgaController, ServicoService) {

    	gumgaController.createRestMethods($scope, FuncionarioService, 'funcionario');


	    gumgaController.createRestMethods($scope, ServicoService, 'servico');
	    $scope.servico.methods.search('nome','');    

	    $scope.capacidadesOptions=[];
    
    	$scope.funcionario.data = entity.data || {};
		$scope.funcionario.data.dataNascimento = ($scope.funcionario.data.dataNascimento == undefined || $scope.funcionario.data.dataNascimento == "") ? new Date() : new Date($scope.funcionario.data.dataNascimento);
		
		$scope.continue = {};
	
		$scope.funcionario.on('putSuccess',function(data){
			$state.go('funcionario.list');
		});
 	}
	
	return FuncionarioFormController;   
});