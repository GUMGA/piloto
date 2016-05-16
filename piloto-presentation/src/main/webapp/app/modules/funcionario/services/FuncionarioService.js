define(['app/apiLocations'], function(APILocation) {

	FuncionarioService.$inject = ['GumgaRest'];

	function FuncionarioService(GumgaRest) {
    	var Service = new GumgaRest(APILocation.apiLocation + '/api/funcionario');

    	return Service;
    }

  	return FuncionarioService;
});