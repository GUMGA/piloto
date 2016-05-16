define(['app/apiLocations'], function(APILocation) {

	PedidoService.$inject = ['GumgaRest'];

	function PedidoService(GumgaRest) {
    	var Service = new GumgaRest(APILocation.apiLocation + '/api/pedido');

    	return Service;
    }

  	return PedidoService;
});