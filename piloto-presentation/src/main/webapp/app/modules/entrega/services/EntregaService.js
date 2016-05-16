define(['app/apiLocations'], function(APILocation) {

	EntregaService.$inject = ['GumgaRest'];

	function EntregaService(GumgaRest) {
    	var Service = new GumgaRest(APILocation.apiLocation + '/api/entrega');

    	return Service;
    }

  	return EntregaService;
});