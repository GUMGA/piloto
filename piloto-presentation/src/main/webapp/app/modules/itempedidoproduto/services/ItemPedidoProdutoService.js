define(['app/apiLocations'], function(APILocation) {

	ItemPedidoProdutoService.$inject = ['GumgaRest'];

	function ItemPedidoProdutoService(GumgaRest) {
    	var Service = new GumgaRest(APILocation.apiLocation + '/api/itempedidoproduto');

    	return Service;
    }

  	return ItemPedidoProdutoService;
});