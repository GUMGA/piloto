define(['app/apiLocations'], function(APILocation) {

	MarcaService.$inject = ['GumgaRest'];

	function MarcaService(GumgaRest) {
    	var Service = new GumgaRest(APILocation.apiLocation + '/api/marca');

    	return Service;
    }

  	return MarcaService;
});