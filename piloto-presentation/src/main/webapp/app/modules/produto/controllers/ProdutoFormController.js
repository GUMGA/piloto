define([], function() {


 	ProdutoFormController.$inject = ['ProdutoService', '$state', 'entity', '$scope', 'gumgaController', 'MarcaService'];

 	function ProdutoFormController(ProdutoService, $state, entity, $scope, gumgaController, MarcaService) {

    	gumgaController.createRestMethods($scope, ProdutoService, 'produto');


	    gumgaController.createRestMethods($scope, MarcaService, 'marca');
	    $scope.marca.methods.search('nome','');    

    
    	$scope.produto.data = entity.data || {};
		$scope.continue = {};
	
		$scope.produto.on('putSuccess',function(data){
			$state.go('produto.list');
		});
 	}
	
	return ProdutoFormController;   
});