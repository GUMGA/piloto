define([], function() {

  ItemPedidoProdutoListController.$inject = ['$scope', 'ItemPedidoProdutoService', 'gumgaController'];

  function ItemPedidoProdutoListController($scope, ItemPedidoProdutoService, gumgaController) {

    gumgaController.createRestMethods($scope, ItemPedidoProdutoService, 'itempedidoproduto');

    ItemPedidoProdutoService.resetDefaultState();
    $scope.itempedidoproduto.execute('get');

    $scope.tableConfig = {
      columns: 'produto ,button',
      checkbox: true,
      columnsConfig: [{
        name: 'produto',
        title: '<span gumga-translate-tag="itempedidoproduto.produto"> produto </span>',
        content: '{{$value.produto }}',
        sortField: 'produto'
      }, {
        name: 'button',
        title: ' ',
        content: '<span class="pull-right"><a class="btn btn-primary btn-sm" ui-sref="itempedidoproduto.edit({id: {{$value.id}} })"><i class="glyphicon glyphicon-pencil"></i></a></span>'
      }]
    };

  };
  return ItemPedidoProdutoListController;
});
