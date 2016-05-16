define(['app/apiLocations'], function(APILocation) {

	ServicoService.$inject = ['GumgaRest'];

	function ServicoService(GumgaRest) {
    	var Service = new GumgaRest(APILocation.apiLocation + '/api/servico');

    	return Service;
    }

  	return ServicoService;
});