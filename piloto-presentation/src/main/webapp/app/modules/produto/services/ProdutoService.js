define(['app/apiLocations'], function(APILocation) {

	ProdutoService.$inject = ['GumgaRest'];

	function ProdutoService(GumgaRest) {
    	var Service = new GumgaRest(APILocation.apiLocation + '/api/produto');

    	return Service;
    }

  	return ProdutoService;
});