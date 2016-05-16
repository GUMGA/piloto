define(['app/apiLocations'], function(APILocation) {

	ItemPedidoServicoService.$inject = ['GumgaRest'];

	function ItemPedidoServicoService(GumgaRest) {
    	var Service = new GumgaRest(APILocation.apiLocation + '/api/itempedidoservico');

    	return Service;
    }

  	return ItemPedidoServicoService;
});