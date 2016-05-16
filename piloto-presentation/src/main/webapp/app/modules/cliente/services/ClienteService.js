define(['app/apiLocations'], function(APILocation) {

	ClienteService.$inject = ['GumgaRest'];

	function ClienteService(GumgaRest) {
    	var Service = new GumgaRest(APILocation.apiLocation + '/api/cliente');

    	return Service;
    }

  	return ClienteService;
});